import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side: Copyright */}
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Prat. All rights reserved.
        </p>
        
        {/* Right Side: Social Media Links */}
        <div className="footer-sns">
          <span className="footer-sns__title">Stay in the Loop?</span>
          <ul className="footer-sns__list" role="list">
            
            {/* LinkedIn */}
            <li className="footer-sns__item" role="listitem">
              <a className="footer-sns__link" href="https://in.linkedin.com/in/sauravdas12345?" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </li>

            {/* GitHub */}
            <li className="footer-sns__item" role="listitem">
              <a className="footer-sns__link" href="https://github.com/P231001102416?" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </li>

            {/* LeetCode */}
            <li className="footer-sns__item" role="listitem">
              <a className="footer-sns__link" href="https://leetcode.com" target="_blank" rel="noreferrer noopener" aria-label="LeetCode">
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.411L7.11 5.826a1.374 1.374 0 0 0-.008 1.944l5.412 5.42a1.374 1.374 0 0 0 1.943-.004l5.421-5.412a1.374 1.374 0 0 0-.005-1.943l-5.412-5.42A1.374 1.374 0 0 0 13.483 0zm.005 2.766l3.526 3.53-3.53 3.527-3.527-3.53 3.53-3.527zM2.243 7.854a1.374 1.374 0 0 0-.968.406L.412 9.123a1.374 1.374 0 0 0-.007 1.944l9.743 9.774a2.748 2.748 0 0 0 3.89-.009l9.544-9.527a1.374 1.374 0 0 0-.005-1.943l-.854-.858a1.374 1.374 0 0 0-1.944.006l-8.683 8.667a.458.458 0 0 1-.649-.001L2.643 8.263a1.374 1.374 0 0 0-.4-.409z"/>
                </svg>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
