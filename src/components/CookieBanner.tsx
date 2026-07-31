import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Cookie, ChevronUp, ChevronDown } from "lucide-react";

type ConsentState = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
};

const defaultConsent: ConsentState = {
  essential: true,
  analytics: false,
  marketing: false,
  functional: false,
};

const STORAGE_KEY = "appworx_cookie_consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [preferences, setPreferences] = useState<ConsentState>(defaultConsent);

  // Check localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Slight delay so page loads first
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveAndClose = (consent: ConsentState, status: string) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ status, consent, savedAt: new Date().toISOString() })
    );
    setVisible(false);
    setShowModal(false);
  };

  const handleAccept = () => {
    saveAndClose(
      { essential: true, analytics: true, marketing: true, functional: true },
      "accepted"
    );
  };

  const handleReject = () => {
    saveAndClose(
      { essential: true, analytics: false, marketing: false, functional: false },
      "rejected"
    );
  };

  const handleSavePreferences = () => {
    saveAndClose(preferences, "custom");
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const categories = [
    {
      key: "essential",
      label: "Essential Cookies",
      description:
        "These cookies are strictly necessary for the website to function. They cannot be disabled as the site would not work properly without them. They are usually set in response to actions you take such as logging in or filling in forms.",
      locked: true,
    },
    {
      key: "analytics",
      label: "Analytics Cookies",
      description:
        "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.",
      locked: false,
    },
    {
      key: "marketing",
      label: "Marketing Cookies",
      description:
        "These cookies are used to track visitors across websites to display relevant advertisements. They help us measure the effectiveness of our marketing campaigns and show you personalised content.",
      locked: false,
    },
    {
      key: "functional",
      label: "Functional Cookies",
      description:
        "These cookies enable enhanced functionality and personalisation such as remembering your preferences, language settings, and other customisations you make on our website.",
      locked: false,
    },
  ];

  if (!visible) return null;

  return (
    <>
      {/* Backdrop when modal is open */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        />
      )}

      {/* Manage Preferences Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl">

            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border shrink-0">
              <div className="flex items-center gap-2">
                <Cookie className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">
                  Cookie Preferences
                </h2>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body — scrollable */}
            <div className="overflow-y-auto flex-1 p-6 space-y-3">
              <p className="text-sm text-muted-foreground mb-4">
                Manage your cookie preferences below. Essential cookies are always
                active as they are required for the website to function properly.
              </p>

              {categories.map((cat) => (
                <div
                  key={cat.key}
                  className="border border-border rounded-xl overflow-hidden"
                >
                  {/* Category Row */}
                  <div className="flex items-center justify-between p-4 bg-muted/30">
                    <button
                      onClick={() => toggleCategory(cat.key)}
                      className="flex items-center gap-2 flex-1 text-left"
                    >
                      {expandedCategory === cat.key ? (
                        <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                      )}
                      <span className="text-sm font-medium text-foreground">
                        {cat.label}
                      </span>
                    </button>

                    {/* Toggle */}
                    {cat.locked ? (
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full border border-border shrink-0">
                        Always On
                      </span>
                    ) : (
                      <button
                        onClick={() =>
                          setPreferences((prev) => ({
                            ...prev,
                            [cat.key]: !prev[cat.key as keyof ConsentState],
                          }))
                        }
                        className={`relative w-11 h-6 rounded-full transition-colors duration-200 shrink-0 ${
                          preferences[cat.key as keyof ConsentState]
                            ? "bg-primary"
                            : "bg-muted-foreground/30"
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
                            preferences[cat.key as keyof ConsentState]
                              ? "translate-x-5"
                              : "translate-x-0"
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Expanded Description */}
                  {expandedCategory === cat.key && (
                    <div className="px-4 pb-4 pt-2 bg-background">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-border shrink-0 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleReject}
                className="flex-1 px-4 py-2.5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              >
                Reject All
              </button>
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-4 py-2.5 rounded-xl border border-primary text-sm font-medium text-primary hover:bg-primary/10 transition-all"
              >
                Save Preferences
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Cookie Banner ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">

            {/* Icon + Text */}
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  We use cookies
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We use cookies to enhance your browsing experience, analyse site
                  traffic, and personalise content. By clicking "Accept All", you
                  consent to our use of cookies. Read our{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-primary underline underline-offset-2 hover:opacity-80"
                  >
                    Privacy Policy
                  </Link>{" "}
                  for more information.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={handleReject}
                className="px-4 py-2 rounded-xl border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              >
                Reject All
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 rounded-xl border border-primary text-xs font-medium text-primary hover:bg-primary/10 transition-all"
              >
                Manage Preferences
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-all"
              >
                Accept All
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;