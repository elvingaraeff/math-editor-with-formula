const layouts = [
  {
    label: "Sadə",
    rows: [
      [
        {
          latex: "+",
          tooltip: "Cəm",
        },
        {
          latex: "-",
          tooltip: "Fərq",
        },
        {
          latex: "\\cdot",
          tooltip: "Vurma",
        },
        {
          latex: "\\times",
          tooltip: "Vurma",
        },
        {
          latex: "\\div",
          tooltip: "Bölmə",
        },
        {
          latex: "\\frac{\\placeholder{}}{\\placeholder{}}",
          tooltip: "Kəsr",
        },
        {
          latex: "=",
          tooltip: "Bərabərlik",
        },
        {
          latex: "\\: ",
          tooltip: "Boşluq",
        },
        {
          latex: "\\placeholder{}^{\\placeholder{}}",
          tooltip: "Qüvvətə yüksəltmə",
        },
        {
          latex: "x^{\\placeholder{}}_{\\placeholder{}}",
          tooltip: "Qüvvət və əsas",
        },
        {
          latex: "x^{\\placeholder{}}_{\\placeholder{}}",
          tooltip: "Qüvvət və əsas",
        },
        {
          latex: "e^{\\placeholder{}}",
          tooltip: "Eyler ədədi",
        },
        {
          latex: "\\sqrt{\\placeholder{}}",
          tooltip: "Kvadrat kökaltı",
        },
        {
          latex: "\\sqrt[\\placeholder{}]{\\placeholder{}}",
          tooltip: "Kökaltı",
        },
        {
          latex: "log _{\\placeholder{}}\\left(\\placeholder{}\\right)",
          tooltip: "Loqarifm",
        },
        {
          latex: "ln \\left(\\placeholder{}\\right)",
          tooltip: "Loqarifm Eyler",
        },
        {
          latex: "\\infty",
          tooltip: "Sonsuzluq işarəsi",
        },
        {
          latex: "\\int ",
          tooltip: "İnteqral",
        },
        {
          latex: "\\int ^{\\placeholder{}}_{\\placeholder{}}",
          tooltip: "İnteqral",
        },
        {
          latex: "\\forall",
          tooltip: "Hamısı üçün",
        },
        {
          latex: "\\exists",
          tooltip: "Mövcuddur",
        },
        {
          latex: "\\Rightarrow",
          tooltip: "Bərabərdir",
        },
        {
          latex: "^{\\circ}",
          tooltip: "Dərəcə",
        },
        {
          latex: "\\left(f\\: \\circ\\: g\\right)",
          tooltip: "Vurma",
        },
        {
          latex: "f\\left(x\\right)",
          tooltip: "Funksiya",
        },
        {
          latex: "lim _{x\\to\\infty}\\left(y\\right)",
          tooltip: "Limit",
        },
        {
          latex: "\\sum ^{\\infty}_{n=0}",
          tooltip: "Siqma",
        },
        {
          latex: "sin \\left(x\\right)",
          tooltip: "Sinus",
        },
        {
          latex: "cos \\left(x\\right)",
          tooltip: "Kosinus",
        },
        {
          latex: "tg \\left(x\\right)",
          tooltip: "Tangens",
        },
        {
          latex: "ctg \\left(x\\right)",
          tooltip: "Kotangens",
        },
      ],
    ],
  },
  {
    label: "Hərflər",
    rows: [
      [
        {
          latex: "\\alpha",
          tooltip: "Alfa",
        },
        {
          latex: "\\beta",
          tooltip: "Beta",
        },
        {
          latex: "\\gamma",
          tooltip: "Qamma",
        },
        {
          latex: "\\iota",
          tooltip: "İota",
        },
        {
          latex: "\\delta",
          tooltip: "Delta",
        },
        {
          latex: "\\eta",
          tooltip: "Eta",
        },
        {
          latex: "\\zeta",
          tooltip: "Zeta",
        },
        {
          latex: "\\theta",
          tooltip: "Teta",
        },
        {
          latex: "\\kappa",
          tooltip: "Kappa",
        },
        {
          latex: "\\lambda",
          tooltip: "Lambda",
        },
        {
          latex: "\\mu",
          tooltip: "Mü",
        },
        {
          latex: "\\nu",
          tooltip: "Nü",
        },
        {
          latex: "\\xi",
          tooltip: "Xi",
        },
        {
          latex: "\\pi",
          tooltip: "Pi",
        },
        {
          latex: "\\sigma",
          tooltip: "Sigma",
        },
        {
          latex: "\\tau",
          tooltip: "Tau",
        },
        {
          latex: "\\upsilon",
          tooltip: "Upsilon",
        },
        {
          latex: "\\phi",
          tooltip: "Fi",
        },
        {
          latex: "\\chi",
          tooltip: "Çi",
        },
        {
          latex: "\\psi",
          tooltip: "Psi",
        },
        {
          latex: "\\omega",
          tooltip: "Omega",
        },
        {
          latex: "\\Gamma",
          tooltip: "Gamma",
        },
        {
          latex: "\\Delta",
          tooltip: "Delta",
        },
        {
          latex: "\\Theta",
          tooltip: "Teta",
        },
        {
          latex: "\\Lambda",
          tooltip: "Lambda",
        },
        {
          latex: "\\Xi",
          tooltip: "Xi",
        },
        {
          latex: "\\Sigma",
          tooltip: "Siqma",
        },
        {
          latex: "\\Phi",
          tooltip: "Fi",
        },
        {
          latex: "\\Psi",
          tooltip: "Psi",
        },
        {
          latex: "\\Omega",
          tooltip: "Omega",
        },
      ],
    ],
  },
  {
    label: "İşarələr",
    rows: [
      [
        {
          latex: "\\angle",
          tooltip: "Bucaq",
        },
        {
          latex: "=",
          tooltip: "Bərabərlik",
        },
        {
          latex: "\\ne",
          tooltip: "Qeyri bərabərlik",
        },
        {
          latex: "<",
          tooltip: "Kiçikdir",
        },
        {
          latex: ">",
          tooltip: "Böyükdür",
        },
        {
          latex: "\\le",
          tooltip: "Kiçikdir",
        },
        {
          latex: "\\ge",
          tooltip: "Böyükdür",
        },
        {
          latex: "\\left(\\placeholder{}\\right)",
          tooltip: "Mötərizə",
        },
        {
          latex: "\\left|\\placeholder{}\\right|",
          tooltip: "Modul",
        },
        {
          latex: "\\left[\\placeholder{}\\right]",
          tooltip: "Qapalı mötərizə",
        },
        {
          latex: "\\{\\placeholder{}\\}",
          tooltip: "Ümumi mötərizə",
        },
        {
          latex: "\\lfloor\\placeholder{}\\rfloor",
          tooltip: "Aşağı mötərizə",
        },
        {
          latex: "\\lceil\\placeholder{}\\rceil",
          tooltip: "Yuxarı mötərizə",
        },
        {
          latex: "!",
          tooltip: "Faktorial",
        },
        {
          latex: "\\rightarrow",
          tooltip: "Ox",
        },
        {
          latex: "\\overline{\\placeholder{}}",
          tooltip: "Yuxarıdan xətt",
        },
        {
          latex: "\\underline{\\placeholder{}}",
          tooltip: "Aşağıdan xətt",
        },
        {
          latex: "\\prod ^a_b\\left(x\\right)",
          tooltip: "Pi",
        },
        {
          latex: "\\vec{\\placeholder{}}",
          tooltip: "Vektor",
        },
        {
          latex: "\\in",
          tooltip: "Daxildir",
        },
        {
          latex: "\\notin",
          tooltip: "Daxil deyil",
        },
        {
          latex: "\\varnothing",
          tooltip: "Mövcuddur",
        },
        {
          latex: "\\cap",
          tooltip: "Kəsişmə",
        },
        {
          latex: "\\cup",
          tooltip: "Birləşmə",
        },
        {
          latex: "\\subset",
          tooltip: "Alt çoxluq",
        },
        {
          latex: "\\supset",
          tooltip: "Birləşmə",
        },
        {
          latex: "\\supseteq",
          tooltip: "Birləşmə",
        },
        {
          latex: "\\subseteq",
          tooltip: "Birləşmə",
        },
        {
          latex: "\\neg",
          tooltip: "Birləşmə",
        },
        {
          latex: "\\oplus",
          tooltip: "Birləşmə",
        },
      ],
    ],
  },
  {
    label: "Digər",
    rows: [
      [
        {
          latex: "\\approx",
          tooltip: "Təqribi",
        },
        {
          latex: "\\sim",
          tooltip: "Sim",
        },
        {
          latex: "\\simeq",
          tooltip: "Simeq",
        },
        {
          latex: "\\cong",
          tooltip: "Cong",
        },
        {
          latex: "\\pm",
          tooltip: "Pm",
        },
        {
          latex: "\\vert",
          tooltip: "Vert",
        },
        {
          latex: "\\otimes",
          tooltip: "Otimes",
        },
        {
          latex: "\\deg",
          tooltip: "Deg",
        },
        {
          latex: "\\bigtriangleup",
          tooltip: "BigTriangleUp",
        },
        {
          latex: "¢",
          tooltip: "¢",
        },
        {
          latex: "\\vdash",
          tooltip: "Vdash",
        },
        {
          latex: "\\perp",
          tooltip: "Perp",
        },
        {
          latex: "\\longleftarrow",
          tooltip: "LongLeftArrow",
        },
        {
          latex: "\\longrightarrow",
          tooltip: "LongRightArrow",
        },
        {
          latex: "\\longleftrightarrow",
          tooltip: "LongLeftRightArrow",
        },
        {
          latex: "\\stackbin{\\placeholder{}}{\\longrightarrow}",
          tooltip: "Sağ ox üzəri",
        },
        {
          label: "(2 × 2)",
          latex:
            "\\begin{pmatrix} \\placeholder{} & \\placeholder{} \\\\ \\placeholder{} & \\placeholder{} \\end{pmatrix}",
          tooltip: "2x2 ölçülü massiv",
        },
        {
          label: "(3 × 3)",
          latex:
            "\\begin{pmatrix} \\placeholder{} & \\placeholder{} & \\placeholder{} \\\\ \\placeholder{} & \\placeholder{} & \\placeholder{} \\\\ \\placeholder{} & \\placeholder{} & \\placeholder{} \\end{pmatrix}",
          tooltip: "3x3 ölçülü massiv",
        },
        {
          label: "(1 × 2)",
          latex:
            "\\begin{pmatrix} \\placeholder{} & \\placeholder{} \\end{pmatrix}",
          tooltip: "1x2 ölçülü massiv",
        },
        {
          label: "(1 × 3)",
          latex:
            "\\begin{pmatrix} \\placeholder{} & \\placeholder{} & \\placeholder{} \\end{pmatrix}",
          tooltip: "1x3 ölçülü masssiv",
        },
        {
          latex: "\\tilde{\\placeholder{}}",
          tooltip: "Tilde",
        },
        {
          latex: "\\frac{\\partial}{\\partial x}\\left(y\\right)",
          tooltip: "Törəmə",
        },
        {
          latex:
            "\\begin{\\cases}\\placeholder{} \\\\ \\placeholder{}\\end{\\cases}",
          tooltip: "Tənliklər sistemi",
        },
      ],
    ],
  },
];

export default layouts;
