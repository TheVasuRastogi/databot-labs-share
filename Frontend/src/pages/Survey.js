import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBolt, FaCheckCircle, FaClipboardList, FaIndustry, FaShieldAlt } from 'react-icons/fa';
import {
  downloadSurveyCsv,
  exportSurveyResponses,
  submitSurveyResponse,
} from '../utils/surveyApi';

const CONTENT_WIDTH = 'max-w-5xl';

const FIELD_CLASS =
  'w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0 transition-colors outline-none';

const LABEL_CLASS = 'block text-sm font-medium text-gray-800 mb-1.5';

const BRANCH_OPTIONS = [
  'Datacenters',
  'Hospitals',
  'Airports',
  'Railway network operators',
  'Metro and tram companies – traction power, tunnel ventilation',
  'Petrochemical industry – refineries and gas',
  'Water treatment plants',
  'Telecom exchanges',
  'Steel and aluminum smelters',
  'Pharmaceutical production (GMP class)',
  'Military and defense command centers',
];

const ROLE_OPTIONS = [
  'Technical Manager',
  'Head of Technical Service',
  'Senior Engineer / Lead Engineer',
  'Project Engineer / Work Preparer',
  'Foreman / Head Mechanic',
  'Executor',
  'Technical Specialist',
  'Planner',
  'Mechanic A (experienced)',
  'All-round Mechanic',
  'Maintenance Mechanic',
  'Calibration & Test Technician',
  'Operator / Centralist',
  'Mechanic B (in training)',
  'Assistant Mechanic',
];

const SWITCHING_ACTIVITY_OPTIONS = [
  { value: 'energizing', label: 'energizing' },
  { value: 'coupling', label: 'coupling' },
  { value: 'bypass switching', label: 'bypass switching' },
  { value: 'test activities', label: 'test activities' },
  { value: 'other', label: 'other' },
];

const SAFETY_MEASURE_OPTIONS = [
  { value: 'Lock out/Tag out', label: 'Lock out/Tag out' },
  { value: 'Switching program with digital work permit', label: 'Switching program with digital work permit' },
  { value: 'Switching simulation beforehand (digital twin)', label: 'Switching simulation beforehand (digital twin)' },
  { value: 'Switching robot / switching equipment with fixed scripts', label: 'Switching robot / switching equipment with fixed scripts' },
  { value: 'Two-person operation mandatory', label: 'Two-person operation mandatory' },
  { value: 'Automated voltage absence check', label: 'Automated voltage absence check' },
  { value: 'Digital identification (RFID/NFC tagging)', label: 'Digital identification (RFID/NFC tagging)' },
  { value: 'other', label: 'other' },
];

const DISADVANTAGE_OPTIONS = [
  { value: 'too much administrative preparation', label: 'Too much administrative preparation' },
  { value: 'sometimes still goes wrong', label: 'Sometimes it still goes wrong' },
  { value: 'time consuming', label: 'Time consuming' },
  { value: 'too few engineers available', label: 'Too few engineers available' },
  { value: 'something else', label: 'Something else (specify)' },
  { value: 'completely satisfied with current way', label: 'Completely satisfied with current way' },
];

const SURVEY_HIGHLIGHTS = [
  {
    icon: FaIndustry,
    title: 'Critical infrastructure',
    desc: 'Responses from Dutch companies, unions, and foundations across high-risk sectors.',
  },
  {
    icon: FaBolt,
    title: 'Switching risk focus',
    desc: 'Structured insight into energizing, coupling, bypass switching, and related activities.',
  },
  {
    icon: FaShieldAlt,
    title: 'Safety measures',
    desc: 'Capture how teams reduce human error and service interruption in the field.',
  },
];

const INITIAL_FORM_STATE = {
  branch: '',
  company: '',
  role: '',
  awareness: 'aware',
  switchingActivities: [],
  otherActivityText: '',
  safetyMeasures: [],
  otherSafetyText: '',
  disadvantage: 'too much administrative preparation',
  disadvantageOther: '',
  fullName: '',
};

function getSelectedSwitchingActivities(state) {
  const activities = state.switchingActivities.filter((value) => value !== 'other');

  if (state.switchingActivities.includes('other')) {
    if (state.otherActivityText.trim()) {
      activities.push(`other: ${state.otherActivityText.trim()}`);
    } else {
      activities.push('other (unspecified)');
    }
  }

  return activities.length ? activities.join(', ') : 'none selected';
}

function getSelectedSafetyMeasures(state) {
  const measures = state.safetyMeasures.filter((value) => value !== 'other');

  if (state.safetyMeasures.includes('other')) {
    if (state.otherSafetyText.trim()) {
      measures.push(`other: ${state.otherSafetyText.trim()}`);
    } else {
      measures.push('other (unspecified)');
    }
  }

  return measures.length ? measures.join('; ') : 'none selected';
}

function getFinalDisadvantage(state) {
  if (state.disadvantage === 'something else') {
    if (state.disadvantageOther.trim()) {
      return `Something else: ${state.disadvantageOther.trim()}`;
    }

    return 'Something else (no detail)';
  }

  return state.disadvantage;
}

function buildStatementObject(state) {
  const branch = state.branch || '[branch not chosen]';
  const switchingActivities = getSelectedSwitchingActivities(state);
  const safetyMeasures = getSelectedSafetyMeasures(state);
  const disadvantage = getFinalDisadvantage(state);

  const rawStatement = `We are ${state.awareness} that switching activities related to (${switchingActivities}) carry the highest risk of human error with severe consequences including health-related risks and risk of service interruption. To reduce risks in the ${branch} sector, we perform these activities using: ${safetyMeasures}. The disadvantage of this approach is: ${disadvantage}.`;

  return {
    timestamp: new Date().toISOString(),
    branch,
    company: state.company.trim(),
    role: state.role,
    awareness: state.awareness,
    switchingActivities,
    safetyMeasures,
    disadvantage,
    fullName: state.fullName.trim(),
    rawStatement,
  };
}

function toggleValue(values, value) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

function CheckboxGroup({ options, selectedValues, onToggle, otherValue, onOtherChange, otherPlaceholder }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((option) => {
        const isSelected = selectedValues.includes(option.value);

        return (
          <label
            key={option.value}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition-colors cursor-pointer ${
              isSelected
                ? 'border-gray-900 bg-gray-900 text-white'
                : 'border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-300"
              checked={isSelected}
              onChange={() => onToggle(option.value)}
            />
            <span>{option.label}</span>
            {option.value === 'other' && isSelected && (
              <input
                type="text"
                value={otherValue}
                onChange={(event) => onOtherChange(event.target.value)}
                onClick={(event) => event.stopPropagation()}
                placeholder={otherPlaceholder}
                className="ml-1 w-28 rounded-md border border-gray-300 bg-white px-2 py-1 text-xs text-black placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            )}
          </label>
        );
      })}
    </div>
  );
}

const Survey = () => {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');
  const [showAdminExport, setShowAdminExport] = useState(false);
  const [adminHint, setAdminHint] = useState('');
  const footerClickCountRef = useRef(0);
  const footerClickTimeoutRef = useRef(null);

  const statement = useMemo(() => buildStatementObject(formState), [formState]);

  const updateField = useCallback((field, value) => {
    setFormState((current) => ({
      ...current,
      [field]: value,
    }));
    setIsSubmitted(false);
  }, []);

  const resetForm = useCallback(() => {
    setFormState(INITIAL_FORM_STATE);
    setIsSubmitted(false);
    setStatusMessage('');
    setStatusType('');
  }, []);

  const revealAdminExport = useCallback(() => {
    setShowAdminExport(true);
    setAdminHint('Admin export available in the bottom-right corner.');
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formState.branch) {
      setStatusType('error');
      setStatusMessage('Please select a branch before submitting.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('');
    setStatusType('');
    setIsSubmitted(false);

    try {
      const payload = buildStatementObject(formState);
      await submitSurveyResponse(payload);
      setStatusType('success');
      setStatusMessage('Response submitted successfully. Thank you for your participation.');
      setIsSubmitted(true);

      const shouldReset = window.confirm('Would you like to clear the form for the next entry?');
      if (shouldReset) {
        resetForm();
      }
    } catch (error) {
      setStatusType('error');
      setStatusMessage(error.message || 'Unable to save your response.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAdminExport = async () => {
    const adminKey = window.prompt('Enter the survey admin export key:');

    if (!adminKey) {
      return;
    }

    try {
      const submissions = await exportSurveyResponses(adminKey);

      if (!submissions.length) {
        window.alert('No data to export yet. Submit some responses first.');
        return;
      }

      downloadSurveyCsv(submissions);
      window.alert(`Exported ${submissions.length} submissions.`);
    } catch (error) {
      window.alert(error.message || 'Unable to export survey data.');
    }
  };

  const handleScopeNoteClick = () => {
    footerClickCountRef.current += 1;

    if (footerClickTimeoutRef.current) {
      clearTimeout(footerClickTimeoutRef.current);
    }

    if (footerClickCountRef.current >= 3) {
      revealAdminExport();
      footerClickCountRef.current = 0;
      return;
    }

    footerClickTimeoutRef.current = setTimeout(() => {
      footerClickCountRef.current = 0;
    }, 2000);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.altKey && event.key.toLowerCase() === 'e') {
        revealAdminExport();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [revealAdminExport]);

  useEffect(() => {
    return () => {
      if (footerClickTimeoutRef.current) {
        clearTimeout(footerClickTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-black">
      <Helmet>
        <title>Critical Switching Survey | DataBot Labs</title>
        <meta
          name="description"
          content="Critical switching and installations survey for Dutch infrastructure organizations."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className={`${CONTENT_WIDTH} mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-10 sm:pb-12`} aria-labelledby="survey-heading">
        <div className="border-b border-gray-200 pb-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">Research survey</p>
          <h1 id="survey-heading" className="mt-3 text-3xl sm:text-4xl font-bold text-black tracking-tight">
            Critical Switching &amp; Installations Survey
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl leading-relaxed">
            Data collection across 100+ Dutch companies, unions, and foundations to understand power switching risks,
            human error exposure, and the safety measures used in critical infrastructure.
          </p>
        </div>
      </section>

      <section className={`${CONTENT_WIDTH} mx-auto px-4 sm:px-6 py-8`} aria-label="Survey focus areas">
        <div className="grid sm:grid-cols-3 gap-6">
          {SURVEY_HIGHLIGHTS.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex flex-col items-start p-6 rounded-xl border border-gray-200 bg-gray-50/80">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 text-gray-700">
                  <Icon className="w-5 h-5" aria-hidden />
                </div>
                <h2 className="mt-4 text-base font-semibold text-black">{item.title}</h2>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className={`${CONTENT_WIDTH} mx-auto px-4 sm:px-6 py-10 sm:py-14`} aria-label="Survey form">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm space-y-6" noValidate>
              <div>
                <h2 className="text-xl font-semibold text-black">Respondent details</h2>
                <p className="mt-1 text-sm text-gray-600">Start with the sector and organization context for this response.</p>
              </div>

              <div>
                <label htmlFor="branchSelect" className={LABEL_CLASS}>
                  Branch / sector <span className="text-gray-500 font-normal">(required)</span>
                </label>
                <select
                  id="branchSelect"
                  value={formState.branch}
                  onChange={(event) => updateField('branch', event.target.value)}
                  className={FIELD_CLASS}
                  required
                >
                  <option value="">Select branch</option>
                  {BRANCH_OPTIONS.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="companyName" className={LABEL_CLASS}>
                    Company / organization
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    value={formState.company}
                    onChange={(event) => updateField('company', event.target.value)}
                    placeholder="e.g., Alliander, TenneT, Schiphol Group"
                    className={FIELD_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="functionRole" className={LABEL_CLASS}>
                    Role of respondent
                  </label>
                  <select
                    id="functionRole"
                    value={formState.role}
                    onChange={(event) => updateField('role', event.target.value)}
                    className={FIELD_CLASS}
                  >
                    <option value="">Select role</option>
                    {ROLE_OPTIONS.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-5 sm:p-6 space-y-5">
                <div>
                  <h3 className="text-base font-semibold text-black">Complete the statement</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Select the options below to build the full switching-risk statement for your organization.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5 space-y-5">
                  <p className="text-sm sm:text-base leading-relaxed text-gray-800">
                    <span className="font-semibold text-black">We are</span>
                    <select
                      id="awarenessSelect"
                      value={formState.awareness}
                      onChange={(event) => updateField('awareness', event.target.value)}
                      className="mx-2 inline-block min-w-[110px] rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-black focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                      <option value="aware">aware</option>
                      <option value="unaware">unaware</option>
                    </select>
                    <span className="font-semibold text-black">that switching activities related to</span>
                  </p>

                  <CheckboxGroup
                    options={SWITCHING_ACTIVITY_OPTIONS}
                    selectedValues={formState.switchingActivities}
                    onToggle={(value) =>
                      updateField('switchingActivities', toggleValue(formState.switchingActivities, value))
                    }
                    otherValue={formState.otherActivityText}
                    onOtherChange={(value) => updateField('otherActivityText', value)}
                    otherPlaceholder="Specify other"
                  />

                  <p className="text-sm sm:text-base leading-relaxed text-gray-800 font-semibold text-black">
                    carry the highest risk of human error with severe consequences including health-related risks and risk
                    of service interruption.
                  </p>

                  <p className="text-sm sm:text-base leading-relaxed text-gray-800">
                    <span className="font-semibold text-black">To reduce risks in the </span>
                    <span className="font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4">
                      {formState.branch || '[branch]'}
                    </span>
                    <span className="font-semibold text-black"> sector, we perform these activities using:</span>
                  </p>

                  <CheckboxGroup
                    options={SAFETY_MEASURE_OPTIONS}
                    selectedValues={formState.safetyMeasures}
                    onToggle={(value) =>
                      updateField('safetyMeasures', toggleValue(formState.safetyMeasures, value))
                    }
                    otherValue={formState.otherSafetyText}
                    onOtherChange={(value) => updateField('otherSafetyText', value)}
                    otherPlaceholder="Other measure"
                  />

                  <div>
                    <p className="text-sm sm:text-base font-semibold text-black">
                      The disadvantage of this approach is:
                    </p>
                    <div className="mt-3 space-y-3">
                      <select
                        id="disadvantageSelect"
                        value={formState.disadvantage}
                        onChange={(event) => updateField('disadvantage', event.target.value)}
                        className={FIELD_CLASS}
                      >
                        {DISADVANTAGE_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {formState.disadvantage === 'something else' && (
                        <input
                          type="text"
                          id="disadvantageOther"
                          value={formState.disadvantageOther}
                          onChange={(event) => updateField('disadvantageOther', event.target.value)}
                          placeholder="Describe the disadvantage"
                          className={FIELD_CLASS}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="fullName" className={LABEL_CLASS}>
                  First &amp; last name
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={formState.fullName}
                  onChange={(event) => updateField('fullName', event.target.value)}
                  placeholder="Your full name"
                  className={FIELD_CLASS}
                  autoComplete="name"
                />
              </div>

              {statusMessage && (
                <div
                  role="status"
                  className={`rounded-lg border px-4 py-3 text-sm ${
                    statusType === 'success'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                      : 'border-red-200 bg-red-50 text-red-800'
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto min-w-[180px] px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                      aria-hidden
                    />
                    Submitting...
                  </>
                ) : isSubmitted ? (
                  <>
                    <FaCheckCircle className="w-4 h-4 shrink-0" />
                    Response submitted
                  </>
                ) : (
                  'Submit response'
                )}
              </button>
            </form>
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 text-gray-700">
                  <FaClipboardList className="w-5 h-5" aria-hidden />
                </div>
                <h2 className="text-lg font-semibold text-black">Your complete statement</h2>
              </div>
              <p className="mt-4 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                {statement.rawStatement}
              </p>
              {!formState.branch && (
                <p className="mt-4 text-sm font-medium text-amber-700">Please select a branch to finalize the statement.</p>
              )}
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-black">About this survey</h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Your responses help us understand switching risks in critical Dutch infrastructure. Thank you for your
                participation.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section
        className={`${CONTENT_WIDTH} mx-auto px-4 sm:px-6 pb-12 sm:pb-16`}
        aria-label="Survey scope"
        onClick={handleScopeNoteClick}
      >
        <p className="text-center text-xs text-gray-500 leading-relaxed">
          Data collected for analysis of switching risks in Dutch critical infrastructures across 100+ target
          organizations, including companies, unions, and foundations.
        </p>
        {adminHint && <p className="mt-2 text-center text-[10px] text-gray-400">{adminHint}</p>}
      </section>

      <button
        id="adminExportBtn"
        type="button"
        onClick={handleAdminExport}
        className={`fixed bottom-5 right-5 z-50 rounded-full bg-gray-900 px-4 py-2 text-xs font-medium text-white shadow-lg transition-all ${
          showAdminExport ? 'opacity-80 hover:opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        Admin: export CSV
      </button>
    </div>
  );
};

export default Survey;
