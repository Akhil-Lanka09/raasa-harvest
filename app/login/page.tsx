'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { logLoginEvent } from '@/lib/google-sheets';
import styles from './page.module.css';

type Tab = 'login' | 'signup';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('login');

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPwd, setLoginPwd] = useState('');
  const [loginErr, setLoginErr] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Signup form state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPwd, setSignupPwd] = useState('');
  const [signupErr, setSignupErr] = useState('');
  const [signupLoading, setSignupLoading] = useState(false);
  const [pwdStrength, setPwdStrength] = useState(0);

  const checkStrength = (pwd: string): number => {
    if (pwd.length === 0) return 0;
    if (pwd.length < 6) return 1;
    if (pwd.length < 10 || !/[0-9]/.test(pwd)) return 2;
    return 3;
  };

  const strengthLabel = ['', 'Weak', 'Medium', 'Strong'];
  const strengthColor = ['', '#c01818', 'var(--saffron)', 'var(--fern)'];
  const strengthWidth = ['0%', '33%', '66%', '100%'];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginErr('');
    if (!loginEmail || !loginPwd) { setLoginErr('Please fill in all fields.'); return; }
    if (loginPwd.length < 6) { setLoginErr('Password must be at least 6 characters.'); return; }

    setLoginLoading(true);
    try {
      // NOTE: Replace with real auth when backend is ready.
      // Currently accepts any email/password combination.
      await logLoginEvent({ type: 'login', email: loginEmail, status: 'success' });
      login({ name: loginEmail.split('@')[0], email: loginEmail });
      router.push('/profile');
    } catch {
      setLoginErr('Sign in failed. Please try again.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupErr('');
    if (!signupName.trim()) { setSignupErr('Please enter your full name.'); return; }
    if (!signupEmail.trim()) { setSignupErr('Please enter your email.'); return; }
    if (!signupPhone.trim()) { setSignupErr('Please enter your WhatsApp number.'); return; }
    if (signupPwd.length < 6) { setSignupErr('Password must be at least 6 characters.'); return; }

    setSignupLoading(true);
    try {
      await logLoginEvent({
        type: 'signup',
        email: signupEmail,
        name: signupName,
        phone: signupPhone,
        status: 'success',
      });
      login({ name: signupName, email: signupEmail, phone: signupPhone, whatsapp: signupPhone });
      router.push('/profile');
    } catch {
      setSignupErr('Account creation failed. Please try again.');
    } finally {
      setSignupLoading(false);
    }
  };

  return (
    <div className="page-enter">
      <div className={styles.bg}>
        <div className={styles.card}>
          {/* Logo */}
          <div className={styles.logoArea}>
            <div className={styles.logoMain}>Raasa</div>
            <div className={styles.logoSub}>Farm · Fresh · Delivered</div>
          </div>

          {/* Tabs */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tabBtn} ${tab === 'login' ? styles.tabActive : ''}`}
              onClick={() => { setTab('login'); setLoginErr(''); }}
            >
              Sign In
            </button>
            <button
              className={`${styles.tabBtn} ${tab === 'signup' ? styles.tabActive : ''}`}
              onClick={() => { setTab('signup'); setSignupErr(''); }}
            >
              Create Account
            </button>
          </div>

          {/* Login Form */}
          {tab === 'login' && (
            <form onSubmit={handleLogin} className={styles.form} noValidate>
              <div className="field-group">
                <label className="field-label" htmlFor="lemail">Email Address</label>
                <input
                  className="field-input" id="lemail" type="email" required
                  placeholder="you@example.com" autoComplete="email"
                  value={loginEmail}
                  onChange={e => { setLoginEmail(e.target.value); setLoginErr(''); }}
                />
              </div>
              <div className="field-group">
                <label className="field-label" htmlFor="lpwd">Password</label>
                <input
                  className="field-input" id="lpwd" type="password" required
                  placeholder="Min. 6 characters" autoComplete="current-password"
                  value={loginPwd}
                  onChange={e => { setLoginPwd(e.target.value); setLoginErr(''); }}
                />
              </div>
              {loginErr && <div className={styles.errMsg} role="alert">{loginErr}</div>}
              <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={loginLoading}>
                {loginLoading ? 'Signing in…' : 'Sign In'}
              </button>

              <div className={styles.divider}><span>or</span></div>

              <a
                href="https://wa.me/919849048999"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBtn}
              >
                <WhatsAppIcon /> &nbsp;Order without an account via WhatsApp
              </a>
            </form>
          )}

          {/* Signup Form */}
          {tab === 'signup' && (
            <form onSubmit={handleSignup} className={styles.form} noValidate>
              <div className="field-group">
                <label className="field-label" htmlFor="sname">Full Name</label>
                <input
                  className="field-input" id="sname" type="text" required
                  placeholder="e.g. Priya Reddy" autoComplete="name"
                  value={signupName}
                  onChange={e => { setSignupName(e.target.value); setSignupErr(''); }}
                />
              </div>
              <div className="field-group">
                <label className="field-label" htmlFor="semail">Email Address</label>
                <input
                  className="field-input" id="semail" type="email" required
                  placeholder="you@example.com" autoComplete="email"
                  value={signupEmail}
                  onChange={e => { setSignupEmail(e.target.value); setSignupErr(''); }}
                />
              </div>
              <div className="field-group">
                <label className="field-label" htmlFor="sphone">WhatsApp Number</label>
                <input
                  className="field-input" id="sphone" type="tel" required
                  placeholder="+91 98765 43210" autoComplete="tel"
                  value={signupPhone}
                  onChange={e => { setSignupPhone(e.target.value); setSignupErr(''); }}
                />
              </div>
              <div className="field-group">
                <label className="field-label" htmlFor="spwd">Password</label>
                <input
                  className="field-input" id="spwd" type="password" required
                  placeholder="Min. 6 characters" autoComplete="new-password"
                  value={signupPwd}
                  onChange={e => {
                    setSignupPwd(e.target.value);
                    setPwdStrength(checkStrength(e.target.value));
                    setSignupErr('');
                  }}
                />
                {signupPwd && (
                  <div className={styles.pwdBar}>
                    <div
                      className={styles.pwdFill}
                      style={{ width: strengthWidth[pwdStrength], background: strengthColor[pwdStrength] }}
                    />
                    <span style={{ color: strengthColor[pwdStrength] }}>
                      {strengthLabel[pwdStrength]}
                    </span>
                  </div>
                )}
              </div>
              {signupErr && <div className={styles.errMsg} role="alert">{signupErr}</div>}
              <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={signupLoading}>
                {signupLoading ? 'Creating account…' : 'Create Account'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
