import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';

const getPasswordStrength = (password) => {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
};

const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];

const Login = () => {
    const navigate = useNavigate();
    const { login, isAuthenticated, error } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/profile');
        }
    }, [isAuthenticated, navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setFormError('');
    };

    const validateForm = () => {
        if (!formData.email || !formData.password) {
            setFormError('Please fill in all fields');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setFormError('Please enter a valid email address');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            setLoading(true);
            setFormError('');
            await login(formData.email, formData.password);
            setSuccessMsg('Login successful! Redirecting to your dashboard...');
            setTimeout(() => navigate('/profile'), 1200);
        } catch (err) {
            setFormError(err.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const passwordStrength = getPasswordStrength(formData.password);

    return (
        <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 antialiased">
            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[#030014]" />
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:1.25rem_1.25rem] sm:bg-[length:2rem_2rem]" />
                <div className="absolute top-0 right-0 w-[25rem] sm:w-[37.5rem] md:w-[50rem] h-[25rem] sm:h-[37.5rem] md:h-[50rem] bg-purple-500/10 rounded-full filter blur-[6.25rem] sm:blur-[7.5rem] animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[25rem] sm:w-[37.5rem] md:w-[50rem] h-[25rem] sm:h-[37.5rem] md:h-[50rem] bg-blue-500/10 rounded-full filter blur-[6.25rem] sm:blur-[7.5rem] animate-pulse" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px)] bg-[size:1.25rem_1.25rem] sm:bg-[size:2rem_2rem]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:1.25rem_1.25rem] sm:bg-[size:2rem_2rem]" />
            </div>
            <div className="relative z-10 w-full max-w-[20rem] sm:max-w-[26rem]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-6 sm:mb-8"
                >
                    <h1 className="text-[2rem] sm:text-[2.5rem] font-bold mb-2 sm:mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
                        Sign in to your account
                    </h1>
                    <p className="text-base sm:text-lg text-gray-400/80">
                        Or{' '}
                        <Link to="/register" className="text-purple-400/90 hover:text-purple-400 transition-colors duration-300 font-medium">
                            create a new account
                        </Link>
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="backdrop-blur-xl bg-white/[0.02] rounded-2xl border border-white/[0.05] p-5 sm:p-8 shadow-[0_0_62.5rem_rgba(120,_119,_198,_0.15)]"
                >
                    {(formError || error) && (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2.5 mb-5 text-red-500 text-sm">
                            {formError || error}
                        </div>
                    )}
                    {successMsg && (
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2.5 mb-5 text-green-500 text-sm">
                            {successMsg}
                        </div>
                    )}
                    <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300/90 mb-1.5 sm:mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FaEnvelope className="text-purple-400/50 w-4 h-4" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full pl-11 pr-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.01] border border-white/[0.05] focus:border-purple-500/30 focus:bg-white/[0.02] transition-all duration-300 text-white placeholder-gray-500/40 text-[14px] sm:text-[15px]"
                                    placeholder="Email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300/90 mb-1.5 sm:mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FaLock className="text-purple-400/50 w-4 h-4" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    required
                                    className="w-full pl-11 pr-10 py-2.5 sm:py-3 rounded-xl bg-white/[0.01] border border-white/[0.05] focus:border-purple-500/30 focus:bg-white/[0.02] transition-all duration-300 text-white placeholder-gray-500/40 text-[14px] sm:text-[15px]"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-purple-400/50 hover:text-purple-400 focus:outline-none"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    tabIndex={-1}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {formData.password && (
                                <div className="mt-2 flex items-center gap-2">
                                    <div className={`h-2 w-24 rounded-full ${strengthColors[passwordStrength - 1] || 'bg-gray-700'}`}></div>
                                    <span className="text-xs text-gray-400">{strengthLabels[passwordStrength - 1] || 'Too Short'}</span>
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full px-6 py-2.5 sm:py-3 mt-2 sm:mt-3 bg-purple-500/20 hover:bg-purple-500/30 text-white rounded-xl transition-all duration-300 transform hover:translate-y-[-1px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-[14px] sm:text-[15px] font-medium border border-purple-500/10"
                        >
                            {loading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white/20 border-t-white/90 rounded-full animate-spin" />
                                    <span>Signing in...</span>
                                </div>
                            ) : (
                                'Sign in'
                            )}
                        </button>
                    </form>
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/[0.03]"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-[#030014] text-gray-400/80 text-[14px] sm:text-[15px]">Or continue with</span>
                            </div>
                        </div>
                        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.01] hover:bg-white/[0.02] border border-white/[0.05] transition-all duration-300 text-[14px] sm:text-[15px]"
                            >
                                <FaGoogle className="text-red-400/90 w-4 h-4" />
                                <span>Google</span>
                            </button>
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.01] hover:bg-white/[0.02] border border-white/[0.05] transition-all duration-300 text-[14px] sm:text-[15px]"
                            >
                                <FaGithub className="text-gray-300/90 w-4 h-4" />
                                <span>GitHub</span>
                            </button>
                        </div>
                    </div>
                    <p className="mt-6 sm:mt-8 text-center text-gray-400/80 text-[14px] sm:text-[15px]">
                        Forgot your password?{' '}
                        <Link
                            to="/forgot-password"
                            className="text-purple-400/90 hover:text-purple-400 transition-colors duration-300 font-medium"
                        >
                            Reset
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
