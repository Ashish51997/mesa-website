import React, { useRef, useState } from 'react';
import { AlertCircle, Download, Eye, EyeOff, Loader2 } from 'lucide-react';
import logoMark from '../assets/login-logo-mark.svg';
import logoMarkMobile from '../assets/login-logo-mark-mobile.svg';
import wordmark from '../assets/login-wordmark.svg';
import wordmarkMobile from '../assets/login-wordmark-mobile.svg';

/* No auth service ships with this repo yet, so the endpoint is configurable and
   falls back to a same-origin path. Swap VITE_AUTH_URL when the backend lands —
   the request shape below is the only thing this screen assumes. */
const AUTH_URL = import.meta.env.VITE_AUTH_URL ?? '/api/auth/login';

/* Plants run on Android tablets and phones, and the app is side-loaded rather
   than shipped through Play, so Android visitors get a direct APK link. Point
   VITE_ANDROID_APK_URL at the hosted build. */
const APK_URL = import.meta.env.VITE_ANDROID_APK_URL ?? '/app/mesaorigins.apk';

// Read once at module load — the UA cannot change mid-session, so this does not
// need to be state.
const IS_ANDROID =
  typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent);

const ERRORS = {
  email: 'Enter your email',
  password: 'Enter your password',
  credentials: 'Email or password is incorrect.',
  network: 'Could not connect. Check your internet and try again.',
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  /* State updates are async, so a second submit can arrive before `loading` has
     re-rendered. This ref flips synchronously and is what actually guards the
     request — double-tapping Sign in fires exactly one fetch. */
  const inFlight = useRef(false);

  // Any edit clears the previous failure; stale errors under a field the user
  // is actively fixing read as if the fix didn't work.
  const onEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inFlight.current) return;

    // Shop-floor tablets add trailing spaces to email constantly. Passwords are
    // left exactly as typed — whitespace can be significant there.
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError(ERRORS.email);
      return;
    }
    if (!password) {
      setError(ERRORS.password);
      return;
    }

    inFlight.current = true;
    setLoading(true);
    setError('');

    try {
      const res = await fetch(AUTH_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail, password }),
      });

      if (res.status === 401) {
        setError(ERRORS.credentials);
        return;
      }
      if (!res.ok) {
        setError(ERRORS.network);
        return;
      }

      /* A 200 alone is not proof of a sign-in. The SPA host rewrites unknown
         paths to index.html, so if the auth endpoint is missing or misrouted
         this returns 200 text/html — and treating that as success would wave
         the user through without ever authenticating. Require JSON. */
      if (!(res.headers.get('content-type') ?? '').includes('application/json')) {
        setError(ERRORS.network);
        return;
      }

      // Success: token storage and post-login routing belong to the auth
      // service, not this screen.
      window.location.assign(import.meta.env.VITE_APP_URL ?? '/');
    } catch {
      setError(ERRORS.network);
    } finally {
      // Always runs, so a thrown fetch can't strand the button in "Signing in…".
      inFlight.current = false;
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login-inner">
        {/* TODO(NAMING): "MesaOrigins" / "One Platform. Every Operation." is
            pending the naming decision — this lockup is where it changes. */}
        <div className="login-brand">
          {/* The mobile artwork is drawn at its own proportions rather than
              scaled down from the desktop one, so each breakpoint loads its
              own file and only the matching source is fetched. */}
          <picture>
            <source srcSet={logoMarkMobile} media="(max-width: 767px)" />
            <img src={logoMark} alt="" className="login-brand-mark" />
          </picture>
          <picture>
            <source srcSet={wordmarkMobile} media="(max-width: 767px)" />
            <img
              src={wordmark}
              alt="MesaOrigins — One Platform. Every Operation."
              className="login-brand-wordmark"
            />
          </picture>
        </div>

        <div className="login-panel">
          <div className="login-card">
            <h1 className="login-title">Organization sign in</h1>
            <p className="login-subtitle">
              Use the email and password provided by your organization administrator.
            </p>

            <form className="login-form" onSubmit={handleSubmit} noValidate>
              <label className="login-label" htmlFor="login-email">Email</label>
              <input
                id="login-email"
                className="login-input"
                type="email"
                name="email"
                value={email}
                onChange={onEmailChange}
                placeholder="name@organization.com"
                autoComplete="username"
                inputMode="email"
                autoCapitalize="none"
                spellCheck="false"
                disabled={loading}
              />

              <label className="login-label" htmlFor="login-password">Password</label>
              <div className="login-password">
                <input
                  id="login-password"
                  className="login-input login-input--password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  onChange={onPasswordChange}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  disabled={loading}
                />
                <button
                  type="button"
                  className="login-eye"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  aria-pressed={showPassword}
                  disabled={loading}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Live region so the failure is announced, not just drawn. It is
                  always in the tree — inserting it on error can be missed. */}
              <p className="login-error" role="alert" aria-live="polite">
                {error && (
                  <>
                    <AlertCircle size={16} aria-hidden="true" />
                    <span>{error}</span>
                  </>
                )}
              </p>

              <button type="submit" className="login-submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 size={18} className="login-spinner" aria-hidden="true" />
                    Signing in…
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </form>

            {/* Accounts are admin-provisioned and there is no reset flow in the
                backend, so this is deliberately plain text, not a link. */}
            <p className="login-help">Forgot your password? Contact your administrator.</p>

            <div className="login-apps">
              <p className="login-apps-label">Get the app</p>

              {/* Placeholders until the store listings go live. Genuinely
                  disabled rather than dead links, so nobody taps through to a
                  404 and the state is announced as unavailable. Swap in the
                  official Google/Apple badge artwork at launch — these glyphs
                  are stand-ins, not the branded badges the stores require. */}
              <div className="login-apps-row">
                <button type="button" className="login-store" disabled>
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path
                      d="M3.6 2.1c-.3.3-.5.8-.5 1.4v17c0 .6.2 1.1.5 1.4l.1.1 9.5-9.5v-.2L3.7 2.8l-.1-.1zM17 15.3l-3.2-3.2v-.2L17 8.7l.1.1 3.8 2.1c1.1.6 1.1 1.6 0 2.2l-3.8 2.2z"
                      fill="currentColor"
                    />
                    <path d="M17.1 15.4 13.8 12 4.3 21.5c.4.4 1 .4 1.7 0l11.1-6.1" fill="currentColor" opacity=".75" />
                    <path d="M17.1 8.6 6 2.5c-.7-.4-1.3-.4-1.7 0L13.8 12z" fill="currentColor" opacity=".5" />
                  </svg>
                  <span className="login-store-text">
                    <span className="login-store-sub">Coming soon on</span>
                    <span className="login-store-name">Google Play</span>
                  </span>
                </button>

                <button type="button" className="login-store" disabled>
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path
                      d="M16.4 1.4c0 1.1-.5 2.2-1.2 3-.8.9-2.2 1.5-3.3 1.4-.1-1.1.4-2.3 1.2-3 .8-.9 2.3-1.5 3.3-1.4zM20.9 17.1c-.5 1.3-.8 1.9-1.5 3-1 1.6-2.4 3.6-4.1 3.6-1.5 0-1.9-1-4-1s-2.5 1-4.1 1c-1.7 0-3-1.8-4-3.4C.4 15.9 0 10.7 1.7 7.9 2.9 5.9 4.9 4.8 6.7 4.8c1.8 0 3 1 4.5 1 1.5 0 2.4-1 4.5-1 1.6 0 3.3.9 4.5 2.4-4 2.2-3.3 7.9.7 9.9z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="login-store-text">
                    <span className="login-store-sub">Coming soon on</span>
                    <span className="login-store-name">App Store</span>
                  </span>
                </button>
              </div>

              {/* Until Play ships, Android is the one platform with a working
                  install path today. */}
              {IS_ANDROID && (
                <a className="login-apk" href={APK_URL} download>
                  <Download size={15} aria-hidden="true" />
                  <span>Download the APK directly</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
