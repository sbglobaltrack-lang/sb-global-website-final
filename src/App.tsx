import React, { useState } from 'react';

const colors = {
  primary: '#0F3D2E',
  secondary: '#2E7D5B',
  gold: '#C8A45D',
  soft: '#F5F7F6',
  text: '#1A1A1A',
};

type IconProps = {
  name: string;
  size?: number;
  className?: string;
};

function Icon({ name, size = 22, className = '' }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': 'true',
  };

  const icons: Record<string, JSX.Element> = {
    arrow: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.7 2.7L16.5 9" />
      </svg>
    ),
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
    layers: (
      <svg {...common}>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </svg>
    ),
    package: (
      <svg {...common}>
        <path d="m3 7 9-4 9 4-9 4-9-4Z" />
        <path d="M3 7v10l9 4 9-4V7" />
        <path d="M12 11v10" />
        <path d="m8 15 2 2 4-5" />
      </svg>
    ),
    recycle: (
      <svg {...common}>
        <path d="M7 19H5.4a2 2 0 0 1-1.7-3L6 12" />
        <path d="m4 14 2-2 2 2" />
        <path d="M17 19h1.6a2 2 0 0 0 1.7-3L18 12" />
        <path d="m20 14-2-2-2 2" />
        <path d="m9 5 .8-1.3a2 2 0 0 1 3.4 0L16 8" />
        <path d="m13.5 8H16V5.5" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Z" />
        <path d="m8.5 12 2.3 2.3 4.8-5" />
      </svg>
    ),
    truck: (
      <svg {...common}>
        <path d="M3 7h11v10H3z" />
        <path d="M14 10h4l3 3v4h-7" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
    factory: (
      <svg {...common}>
        <path d="M3 21V9l6 4V9l6 4V5h6v16H3Z" />
        <path d="M7 17h1" />
        <path d="M12 17h1" />
        <path d="M17 17h1" />
      </svg>
    ),
    boxes: (
      <svg {...common}>
        <path d="M4 7h7v7H4z" />
        <path d="M13 7h7v7h-7z" />
        <path d="M8.5 14h7v7h-7z" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
    phone: (
      <svg {...common}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
      </svg>
    ),
    pin: (
      <svg {...common}>
        <path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    menu: (
      <svg {...common}>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </svg>
    ),
    close: (
      <svg {...common}>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    ),
    bag: (
      <svg {...common}>
        <path d="M7 8h10l1 12H6L7 8Z" />
        <path d="M9 8a3 3 0 0 1 6 0" />
        <path d="M9 13h6" />
      </svg>
    ),
    foodBox: (
      <svg {...common}>
        <path d="M4 9h16l-2 10H6L4 9Z" />
        <path d="M6 5h12l2 4H4l2-4Z" />
        <path d="M9 13h6" />
      </svg>
    ),
    cup: (
      <svg {...common}>
        <path d="M7 4h10l-1 16H8L7 4Z" />
        <path d="M6 4h12" />
        <path d="M8 9h8" />
      </svg>
    ),
    cutlery: (
      <svg {...common}>
        <path d="M7 3v8" />
        <path d="M5 3v4" />
        <path d="M9 3v4" />
        <path d="M7 11v10" />
        <path d="M16 3v18" />
        <path d="M14 3c0 4 4 4 4 0" />
      </svg>
    ),
    straw: (
      <svg {...common}>
        <path d="M8 21 15 6" />
        <path d="M15 6h4l1-3" />
        <path d="M6 10h6" />
        <path d="M5 14h5" />
      </svg>
    ),
    trashBag: (
      <svg {...common}>
        <path d="M8 7c1.5-2 6.5-2 8 0" />
        <path d="M7 8h10l2 12H5L7 8Z" />
        <path d="M9 12c2 1 4 1 6 0" />
      </svg>
    ),
    linkedin: (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    facebook: (
      <svg {...common}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" />
      </svg>
    ),
    instagram: (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    ),
    google: (
      <svg {...common}>
        <path d="M21 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h5c-.2 1.2-.9 2.3-1.9 3v2.5h3.1c1.8-1.7 2.8-4.1 2.8-7.2Z" />
        <path d="M12 22c2.5 0 4.6-.8 6.2-2.2l-3.1-2.5c-.9.6-2 .9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H3.7v2.4A10 10 0 0 0 12 22Z" />
        <path d="M6.9 14.4A6 6 0 0 1 6.6 12c0-.8.1-1.6.3-2.4V7.2H3.7A10 10 0 0 0 2 12c0 1.7.4 3.3 1.1 4.8l3.8-2.4Z" />
        <path d="M12 5.8c1.4 0 2.7.5 3.7 1.5l2.8-2.8C16.6 2.9 14.5 2 12 2 8.1 2 4.8 4.2 3.1 7.2l3.8 2.4c.7-2.2 2.7-3.8 5.1-3.8Z" />
      </svg>
    ),
  };

  return icons[name] || icons.check;
}

function SBLogo({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1500 1500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="S&B Global logo"
    >
      <path
        fill={colors.primary}
        d="M1279.55 500.08V177.19H220.31v549.97h212.11l-.61-450.17h465.99c100.02 0 181.43 81.38 181.43 181.44 0 100.01-81.38 181.43-181.43 181.43H580.32v-45.75H897.8c74.83 0 135.68-60.86 135.68-135.68S972.63 322.74 897.8 322.74H477.53l.57 404.42h847.17v641.39H174.56V971.66h45.75v351.14h1059.24V772.87H478.17l.57 398.46h420.27c74.83 0 135.68-60.85 135.68-135.68 0-74.82-60.86-135.68-135.68-135.68H589.73v-45.75h309.28c100.02 0 181.43 81.38 181.43 181.43 0 100.02-81.38 181.43-181.43 181.43H433.02l-.56-444.21h-257.9V131.44H1325.3v368.64h-45.75Z"
      />
    </svg>
  );
}

const productCategories = [
  {
    eyebrow: '01',
    title: 'Sustainable Packaging Solutions',
    purpose:
      'For businesses moving toward eco-conscious packaging without supply disruption.',
    icon: 'recycle',
    products: [
      [
        'Compostable Carry Bags',
        'Plain white, printed, and custom options for retail and daily business use.',
      ],
      [
        'Compostable Waste Bags',
        'Garbage bags, dog waste bags, and produce bag options in compostable material.',
      ],
      [
        'Eco Food Packaging',
        'Bio lid boxes, partition plates, and compostable bowls for food service use.',
      ],
      [
        'Compostable Drinkware',
        'Compostable straws and coated paper cups for beverage and takeaway operations.',
      ],
      [
        'Compostable Accessories',
        'Pizza tripod stands, bio forks, bio knives, and food-service support products.',
      ],
      [
        'Compostable Mailers',
        'Courier bags, mailer bags, and garment covers for shipping and retail operations.',
      ],
    ],
  },
  {
    eyebrow: '02',
    title: 'Bulk Packaging Supply',
    purpose:
      'For businesses that need consistent supply, practical materials, and cost control.',
    icon: 'boxes',
    products: [
      [
        'Carry Bags',
        'Plastic carry bags, thank you bags, paper bags, and oxo white carry bags for retail operations.',
      ],
      [
        'Drinkware',
        'Sipper glasses with lids, transparent colored glasses, and serving cup options.',
      ],
      [
        'Pet Waste Bags',
        'Plastic, oxo, and compostable dog waste bag options available for bulk programs.',
      ],
    ],
  },
  {
    eyebrow: '03',
    title: 'Food Service Packaging',
    purpose:
      'For restaurants, takeaway, catering, and quick-service operations.',
    icon: 'package',
    products: [
      [
        'Takeout Containers',
        'Bio lid boxes, meal trays, lids, and containers for takeaway and delivery operations.',
      ],
      [
        'Plates & Bowls',
        'Bio partition plates, compostable bowls, and serving bowl options.',
      ],
      [
        'Cups & Beverage',
        'Paper cups, compostable coated cups, plastic cups, and transparent glasses.',
      ],
      [
        'Cutlery',
        'Compostable spoons, forks, knives, bamboo fiber spoons, and plastic dessert spoons.',
      ],
      [
        'Accessories',
        'Straws, pizza tripod stands, stirrers, and daily-use food service accessories.',
      ],
    ],
  },
  {
    eyebrow: '04',
    title: 'Bags & Logistics Solutions',
    purpose: 'For retail, shipping, grocery, courier, and operational use.',
    icon: 'truck',
    products: [
      [
        'Carry Bags',
        'Plastic, compostable, oxo, plain, printed, and brown carry bag options.',
      ],
      [
        'Grocery Bags',
        'Produce bags and grocery bag options for supermarkets and retail use.',
      ],
      [
        'Courier & Mailers',
        'Courier bags, mailer bags, and compostable garment covers for shipping.',
      ],
      [
        'Waste Bags',
        'Garbage bags, pet waste bags, and bulk supply formats for daily operations.',
      ],
    ],
  },
  {
    eyebrow: '05',
    title: 'Raw Materials & Industrial Solutions',
    purpose:
      'For manufacturers and industrial buyers using compostable material inputs.',
    icon: 'factory',
    products: [
      [
        'PLA / PBAT Materials',
        'Bio-resin base materials for compostable packaging and manufacturing applications.',
      ],
      [
        'Film & Extrusion Grades',
        'Extrusion film grade, lamination grade, and thermoforming grade options.',
      ],
      [
        'Molding Compounds',
        'Injection molding grade, straw compound, and compostable filler materials.',
      ],
      [
        'Coating Solutions',
        'Paper coating compound and bio coat solutions for PE coating replacement.',
      ],
    ],
  },
  {
    eyebrow: '06',
    title: 'Film, Bottles & Specialty Products',
    purpose: 'For specialized commercial and industrial packaging needs.',
    icon: 'layers',
    products: [
      [
        'Film Products',
        'Compostable bio cling film, compostable barricade tape, and warning tape.',
      ],
      [
        'Bottles & Preforms',
        'Compostable bottles and compostable bottle preforms for product manufacturing.',
      ],
    ],
  },
];

const trustItems = [
  ['shield', 'Reliable Supply'],
  ['package', 'Custom Solutions'],
  ['globe', 'Global Sourcing'],
  ['layers', 'Flexible Product Range'],
];

const processSteps = [
  [
    '01',
    'Requirement Mapping',
    'We identify your product use, volume, material preference, and operational constraints.',
  ],
  [
    '02',
    'Sourcing & Sampling',
    'We align specs, samples, customization, and practical commercial options before scale.',
  ],
  [
    '03',
    'Supply Execution',
    'We support recurring supply needs with consistency, communication, and execution discipline.',
  ],
];

function ProductVisual() {
  const items = [
    {
      label: 'Carry Bags',
      className:
        'hidden md:block -left-16 -top-16 h-36 w-28 rotate-[-8deg] z-20',
    },
    {
      label: 'Food Boxes',
      className:
        'hidden md:block -right-14 -top-10 h-28 w-36 rotate-[7deg] z-20',
    },
    {
      label: 'Cups',
      className:
        'hidden md:block -left-14 -bottom-12 h-28 w-28 rotate-[5deg] z-20',
    },
    {
      label: 'Cutlery',
      className:
        'hidden md:block -right-12 -bottom-14 h-24 w-36 rotate-[-6deg] z-20',
    },
    {
      label: 'Straws',
      className:
        'hidden md:block left-[38%] -top-20 h-20 w-24 rotate-[-2deg] z-10 opacity-90',
    },
    {
      label: 'Trash Bags',
      className:
        'hidden md:block -right-24 top-[42%] h-24 w-32 rotate-[4deg] z-10 opacity-90',
    },
  ];

  return (
    <div className="relative mx-auto mt-4 flex h-[300px] max-w-[520px] items-center justify-center md:mt-0 md:h-[430px] [perspective:1400px]">
      <div className="relative z-10 flex h-[280px] w-[280px] animate-[floatPanel_7s_ease-in-out_infinite] items-center justify-center rounded-[2.4rem] border border-white/20 bg-gradient-to-br from-[#0B2E23] via-[#0F3D2E] to-[#2E7D5B] p-4 shadow-2xl md:h-[340px] md:w-[340px] md:rounded-[3rem] md:p-6">
        <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_30%_20%,rgba(200,164,93,0.32),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.18),transparent_32%)]" />
        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.9rem] border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-5 backdrop-blur md:rounded-[2.2rem] md:p-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-xs md:tracking-[0.35em]">
              B2B Supply System
            </p>
            <h3 className="mt-3 max-w-[220px] text-[1.55rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.25)] md:max-w-[260px] md:text-[1.7rem]">
              Reliable Packaging Supply
            </h3>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 md:mt-5 md:gap-3">
            {[
              'Food & Beverage',
              'Retail & Grocery',
              'Logistics & Industrial',
              'Commercial Supply',
            ].map((x) => (
              <div
                key={x}
                className="rounded-xl border border-white/12 bg-white/12 px-3 py-2 text-[11px] font-semibold tracking-[0.02em] text-white shadow-lg backdrop-blur-sm md:rounded-2xl md:px-4 md:py-3 md:text-sm"
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </div>

      {items.map((item, index) => (
        <div
          key={item.label}
          className={`absolute ${
            item.className
          } rounded-3xl border border-black/5 bg-white p-4 shadow-xl ${
            index % 2
              ? 'animate-[floatCardAlt_6s_ease-in-out_infinite]'
              : 'animate-[floatCard_5s_ease-in-out_infinite]'
          }`}
        >
          <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-[#F5F7F6] p-3 text-center">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0F3D2E]/8 bg-gradient-to-br from-[#F5F7F6] to-white shadow-sm">
              {item.label === 'Carry Bags' && (
                <Icon name="bag" size={27} className="text-[#0F3D2E]" />
              )}
              {item.label === 'Food Boxes' && (
                <Icon name="foodBox" size={27} className="text-[#2E7D5B]" />
              )}
              {item.label === 'Cups' && (
                <Icon name="cup" size={26} className="text-[#C8A45D]" />
              )}
              {item.label === 'Cutlery' && (
                <Icon name="cutlery" size={26} className="text-[#0F3D2E]" />
              )}
              {item.label === 'Straws' && (
                <Icon name="straw" size={25} className="text-[#C8A45D]" />
              )}
              {item.label === 'Trash Bags' && (
                <Icon name="trashBag" size={26} className="text-[#2E7D5B]" />
              )}
            </div>
            <div className="h-1.5 w-14 rounded-full bg-[#0F3D2E]/18" />
            <p className="mt-3 text-xs font-semibold tracking-[-0.01em] text-[#0F3D2E]">
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  async function handleInquirySubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus('Sending...');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus(
          'Thank you for submitting your inquiry. Our team will reach out to you within 1–2 business days.'
        );
        form.reset();
      } else {
        setFormStatus(
          'Something went wrong. Please email us directly at srishti@sbglobalx.com.'
        );
      }
    } catch {
      setFormStatus(
        'Submission blocked in preview. Please test again after publishing, or email srishti@sbglobalx.com directly.'
      );
    }
  }

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Request Sample', href: '#contact' },
    { label: 'Contact', href: '#contact' },
    { label: 'Connect', href: '#social-connect' },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <style>{`
        @keyframes floatPanel {
          0%, 100% { transform: translateY(0) rotateX(0deg); }
          50% { transform: translateY(-12px) rotateX(3deg); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0) rotateZ(0deg); }
          50% { transform: translateY(-10px) rotateZ(-3deg); }
        }
        @keyframes floatCardAlt {
          0%, 100% { transform: translateY(0) rotateZ(0deg); }
          50% { transform: translateY(10px) rotateZ(3deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp .7s ease both; }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-4">
            <SBLogo className="h-12 w-12" />
            <div className="flex flex-col justify-center leading-[1.02]">
              <div className="text-lg font-bold tracking-[0.16em] text-[#0F3D2E]">
                S&B GLOBAL
              </div>
              <div className="mt-[2px] text-[11px] font-medium tracking-[0.05em] text-black/55">
                Packaging Solutions. Simplified.
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-black/65 transition hover:text-[#0F3D2E]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-[#0F3D2E] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0F3D2E]/15 transition hover:bg-[#2E7D5B] lg:inline-flex"
          >
            Request a Quote
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-black/10 p-2 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <Icon name="close" size={20} />
            ) : (
              <Icon name="menu" size={20} />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/5 bg-white px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-medium text-black/70"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-full bg-[#0F3D2E] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Request a Quote
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-white">
          <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-[#F5F7F6] blur-3xl" />
          <div className="absolute right-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-[#C8A45D]/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 md:py-28">
            <div className="fade-up">
              <div className="mb-6 inline-flex items-center rounded-full border border-[#0F3D2E]/10 bg-[#F5F7F6] px-4 py-2 text-sm font-semibold tracking-[0.04em] text-[#0F3D2E]">
                Global Packaging Supply. Built for Scale.
              </div>
              <h1 className="max-w-5xl text-3xl font-semibold tracking-[-0.05em] leading-[1.05] text-[#0F3D2E] md:text-6xl">
                Sustainable, Industrial, and Custom Packaging Solutions
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
                S&B GLOBAL helps modern businesses simplify packaging
                procurement through reliable sourcing and scalable global supply
                solutions.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F3D2E] px-7 py-4 font-semibold text-white shadow-xl shadow-[#0F3D2E]/15 transition hover:bg-[#2E7D5B]"
                >
                  Request a Quote <Icon name="arrow" size={18} />
                </a>
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-7 py-4 font-semibold text-[#0F3D2E] transition hover:border-[#0F3D2E]/25 hover:bg-[#F5F7F6]"
                >
                  View Product Range
                </a>
              </div>
            </div>

            <ProductVisual />
          </div>
        </section>

        <section className="border-y border-black/5 bg-[#F5F7F6]">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {trustItems.map(([iconName, label]) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm"
              >
                <div className="rounded-xl bg-[#0F3D2E]/8 p-2 text-[#0F3D2E]">
                  <Icon name={iconName} size={20} />
                </div>
                <span className="font-semibold text-black/75">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="solutions"
          className="mx-auto max-w-7xl px-5 py-20 lg:px-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="rounded-[2rem] bg-[#0F3D2E] p-8 text-white shadow-2xl shadow-[#0F3D2E]/15">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C8A45D]">
                Quick Help
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em]">
                Not sure which packaging solution fits your business?
              </h2>
              <p className="mt-5 leading-7 text-white/75">
                Send us your product type, volume, and usage. We’ll help
                identify the right packaging solution.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#0F3D2E] transition hover:bg-[#F5F7F6]"
              >
                Get Recommendation <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {processSteps.map(([num, title, text]) => (
                <div
                  key={title}
                  className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="text-sm font-bold text-[#C8A45D]">
                    {num}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-[#0F3D2E]">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-black/60">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="bg-[#F5F7F6] py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[15px] font-bold uppercase tracking-[0.32em] text-[#C8A45D]">
                Product Range
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#0F3D2E] md:text-5xl">
                Structured packaging solutions for modern business needs.
              </h2>
              <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-black/58 md:text-base">
                From compostable bags and food packaging to industrial supply
                products, S&B GLOBAL offers organized packaging categories
                designed for operational simplicity, flexibility, and scalable
                sourcing.
              </p>
            </div>

            <div className="mt-14 grid gap-7">
              {productCategories.map((category) => (
                <div
                  key={category.title}
                  className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm transition hover:shadow-xl hover:shadow-[#0F3D2E]/5"
                >
                  <div className="border-b border-black/5 bg-white p-7 md:p-8">
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                      <div className="flex gap-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0F3D2E]/8 text-[#0F3D2E]">
                          <Icon name={category.icon} size={26} />
                        </div>

                        <div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-[#C8A45D]">
                              {category.eyebrow}
                            </span>
                            <span className="h-px w-8 bg-[#C8A45D]/60" />
                            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-black/38">
                              Category
                            </span>
                          </div>

                          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-[#0F3D2E] md:text-3xl">
                            {category.title}
                          </h3>

                          <p className="mt-3 max-w-3xl text-[15px] leading-7 text-black/58">
                            {category.purpose}
                          </p>
                        </div>
                      </div>

                      <a
                        href="#contact"
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#0F3D2E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2E7D5B]"
                      >
                        Request details <Icon name="arrow" size={15} />
                      </a>
                    </div>
                  </div>

                  <div className="grid gap-px bg-black/[0.05] sm:grid-cols-2 lg:grid-cols-3">
                    {category.products.map(([name, description]) => (
                      <div
                        key={name}
                        className="group bg-white p-6 transition hover:bg-[#F5F7F6]"
                      >
                        <div className="flex items-start gap-4">
                          <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0F3D2E]/7 text-[#0F3D2E] transition group-hover:bg-[#0F3D2E] group-hover:text-white">
                            <Icon name="check" size={18} />
                          </div>

                          <div>
                            <h4 className="text-base font-semibold tracking-[-0.02em] text-[#0F3D2E]">
                              {name}
                            </h4>
                            <p className="mt-2 text-sm leading-6 text-black/56">
                              {description}
                            </p>
                            <a
                              href="#contact"
                              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2E7D5B]"
                            >
                              Get Quote <Icon name="arrow" size={13} />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="process"
          className="relative overflow-hidden bg-[#0F3D2E] py-24 text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(46,125,91,0.38),transparent_38%),radial-gradient(circle_at_15%_85%,rgba(255,255,255,0.05),transparent_32%),linear-gradient(180deg,#0F3D2E_0%,#0B2E23_100%)]" />
          <div className="absolute right-[-140px] top-[-110px] h-[360px] w-[360px] rounded-full bg-[#C8A45D]/8 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#C8A45D]">
                Operational Approach
              </p>
              <div className="mx-auto mt-5 h-[3px] w-20 rounded-full bg-[#C8A45D]" />

              <h2 className="mx-auto mt-7 max-w-6xl whitespace-normal text-[1.7rem] font-semibold leading-[1.08] tracking-[-0.05em] text-white md:whitespace-nowrap md:text-[2.45rem] lg:text-[2.9rem]">
                Reliable packaging starts with reliable execution.
              </h2>

              <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-white/74 md:text-[16px] md:leading-7">
                Built on communication, consistency, and long-term partnerships,
                S&B GLOBAL goes beyond supplying packaging products. We focus on
                clear communication, dependable support, transparent
                relationships, and operational consistency that businesses can
                rely on every day.
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-[2.2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl">
              <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
                {[
                  {
                    title: 'Responsive Support',
                    text: 'Clear communication and dependable support focused on long-term business relationships.',
                    icon: 'phone',
                  },
                  {
                    title: 'Operational Consistency',
                    text: 'Structured processes designed to support reliable and repeatable supply execution.',
                    icon: 'factory',
                  },
                  {
                    title: 'Custom Packaging Solutions',
                    text: 'Flexible packaging capabilities tailored to different operational and product requirements.',
                    icon: 'package',
                  },
                  {
                    title: 'Sustainability Focused',
                    text: 'Committed to responsible sourcing and environmentally conscious packaging solutions.',
                    icon: 'recycle',
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="group flex min-h-[205px] flex-col items-center justify-center px-5 py-8 text-center transition duration-300 hover:bg-white/[0.03]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C8A45D]/28 bg-[#C8A45D]/6 text-[#C8A45D] transition duration-300 group-hover:scale-105 group-hover:border-[#C8A45D]/50">
                      <Icon name={card.icon} size={28} />
                    </div>

                    <h3 className="mt-5 text-[0.98rem] font-semibold tracking-[-0.03em] text-white leading-tight">
                      {card.title}
                    </h3>

                    <div className="mt-3 h-[2px] w-10 rounded-full bg-[#C8A45D]" />

                    <p className="mt-4 max-w-[185px] text-[12px] leading-5 text-white/68">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="rounded-[2.2rem] bg-[#F5F7F6] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C8A45D]">
                Request a Quote
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#0F3D2E]">
                Let’s simplify your packaging supply.
              </h2>
              <p className="mt-5 leading-8 text-black/62">
                Tell us your requirement, volume, and customization needs. We’ll
                help build a reliable packaging supply system.
              </p>

              <div className="mt-7 inline-flex rounded-2xl border border-[#C8A45D]/25 bg-[#0F3D2E] px-5 py-4 shadow-lg shadow-[#0F3D2E]/10">
                <p className="text-sm font-bold leading-7 tracking-[-0.01em] text-white md:text-[15px]">
                  Contact us for product inquiries, customization support, or
                  sample requests.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <a
                  href="tel:+16628803143"
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <Icon name="phone" size={20} className="text-[#0F3D2E]" />
                  <span className="font-medium">+1 662-880-3143</span>
                </a>
                <a
                  href="mailto:srishti@sbglobalx.com"
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <Icon name="mail" size={20} className="text-[#0F3D2E]" />
                  <span className="font-medium">srishti@sbglobalx.com</span>
                </a>
                <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <Icon name="pin" size={20} className="mt-1 text-[#0F3D2E]" />
                  <span className="font-medium">
                    9400 Goodman Rd, Olive Branch, Mississippi 38654, USA
                  </span>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleInquirySubmit}
              className="rounded-[2.2rem] border border-black/5 bg-white p-6 shadow-xl shadow-black/5"
            >
              <input
                type="hidden"
                name="access_key"
                value="85e2e903-cb5c-4a15-9919-d52a6d5f5b69"
              />
              <input
                type="hidden"
                name="subject"
                value="New Quote Request from S&B GLOBAL Website"
              />
              <input
                type="hidden"
                name="from_name"
                value="S&B GLOBAL Website"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-black/70">
                    Name
                  </span>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-[#F5F7F6] px-4 py-4 outline-none transition focus:border-[#2E7D5B]"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-black/70">
                    Company
                  </span>
                  <input
                    name="company"
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-[#F5F7F6] px-4 py-4 outline-none transition focus:border-[#2E7D5B]"
                    placeholder="Company name"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="text-sm font-semibold text-black/70">
                  Contact Information
                </span>
                <input
                  name="contact"
                  required
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-[#F5F7F6] px-4 py-4 outline-none transition focus:border-[#2E7D5B]"
                  placeholder="Email or phone number"
                />
              </label>

              <label className="mt-4 block">
                <span className="text-sm font-semibold text-black/70">
                  Requirement
                </span>
                <textarea
                  name="requirement"
                  required
                  className="mt-2 h-40 w-full resize-none rounded-2xl border border-black/10 bg-[#F5F7F6] px-4 py-4 outline-none transition focus:border-[#2E7D5B]"
                  placeholder="Tell us product type, volume, material, customization, and timeline."
                />
              </label>

              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0F3D2E] px-7 py-4 font-semibold text-white transition hover:bg-[#2E7D5B]"
              >
                Submit Inquiry <Icon name="arrow" size={18} />
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-black/45">
                Inquiry submissions are sent directly to S&B GLOBAL email
                support.
              </p>

              {formStatus && (
                <div className="mt-4 rounded-2xl border border-[#0F3D2E]/10 bg-[#F5F7F6] px-4 py-3 text-center text-sm font-semibold text-[#0F3D2E]">
                  {formStatus}
                </div>
              )}

              <div
                id="social-connect"
                className="mt-7 overflow-hidden rounded-[1.6rem] bg-[#0F3D2E] px-5 py-4 shadow-xl shadow-[#0F3D2E]/10"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A45D]">
                      Connect With Us
                    </p>
                    <p className="mt-1 text-sm text-white/72">
                      Follow S&B GLOBAL for updates, product insights, and
                      packaging solutions.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/company/s-b-global-usa/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white transition hover:-translate-y-1 hover:border-[#C8A45D]/40 hover:text-[#C8A45D]"
                    >
                      <Icon name="linkedin" size={18} />
                    </a>
                    <a
                      href="https://www.facebook.com/sbglobal.usa/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white transition hover:-translate-y-1 hover:border-[#C8A45D]/40 hover:text-[#C8A45D]"
                    >
                      <Icon name="facebook" size={18} />
                    </a>
                    <a
                      href="https://www.instagram.com/sbglobal_usa/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white transition hover:-translate-y-1 hover:border-[#C8A45D]/40 hover:text-[#C8A45D]"
                    >
                      <Icon name="instagram" size={18} />
                    </a>
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white transition hover:-translate-y-1 hover:border-[#C8A45D]/40 hover:text-[#C8A45D]"
                    >
                      <Icon name="google" size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#F5F7F6]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <SBLogo className="h-9 w-9" />
            <div>
              <div className="text-sm font-bold tracking-[0.16em] text-[#0F3D2E]">
                S&B GLOBAL
              </div>
              <div className="mt-1 text-xs font-medium tracking-[0.04em] text-black/45">
                Packaging Solutions. Simplified.
              </div>
            </div>
          </div>

          <div className="text-sm text-black/50">
            © 2026 S&B GLOBAL. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
