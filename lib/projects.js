import bearingFaults from '@/public/images/bearing_faults.png';
import roboticArmAssembly from '@/public/images/robotic_arm_assembly.png';
import sludgeCircuit from '@/public/images/sludge_circuit.png';

// Every project uses the same `images` field (a list of { src, alt, caption }).
// ProjectCard shows these pictures below the description and tools.
// Pictures are included only when they extracted clearly from the source PDFs.
export const PROJECTS = [
  {
    slug: 'qsvm_bearing_faults',
    title: 'Ball Bearing Fault Detection using QSVM',
    meta: 'December 2024 · Team member · B.Tech capstone, guided by Dr. Srihari Mandava',
    summary: [
      'Our team used vibration signals to classify four ball-bearing conditions: outer race fault, inner race fault, ball fault, and no fault.',
      'We cleaned the signals with Butterworth filtering, normalization, and z-score scaling. Then we extracted time-domain, frequency-domain, and wavelet features such as RMS, kurtosis, skewness, FFT peak frequency, and spectral energy. A Quantum Support Vector Machine with a ZZFeatureMap quantum kernel, run on a Qiskit simulator, classified the faults. We compared it against classical SVM, Decision Tree, and KNN models using accuracy, precision, recall, F1-score, and Cohen’s kappa.',
    ],
    tools: ['Python', 'Qiskit', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Google Colab', 'MATLAB'],
    images: [
      {
        src: bearingFaults,
        alt: 'Three ball bearings photographed side by side, each with a damaged area on the bearing circled in red',
        caption: 'Examples of ball bearing faults, with the damaged areas circled',
      },
    ],
    links: [],
  },
  {
    slug: 'robotic_arm_paper',
    title: 'Design of Maneuverable Robotic Arm in Pharmaceutical Industry',
    meta: 'December 2023 · Team member · Published by IEEE and presented at i-PACT 2023',
    summary: [
      'A research paper co-authored with Yashawanth HR and Rahulganth E N under Dr. A. Sharmila. We designed a manually operated, two-degree-of-freedom robotic arm on a four-wheel-drive chassis for handling delicate pharmaceutical components.',
      'DPDT switches steer the chassis, while a joystick, an Arduino, and two MG995 servo motors control the arm. We modeled the arm’s forward kinematics and designed the 3D-printed parts in Fusion 360, using stress analysis to find and reinforce weak points.',
    ],
    tools: ['Arduino', 'MG995 servo motors', 'Joystick module', 'DPDT switches', 'Fusion 360', '3D printing'],
    images: [
      {
        src: roboticArmAssembly,
        alt: 'Top view of the assembled robotic arm mounted on its four-wheel chassis, with the Arduino and wiring visible',
        caption: 'The assembled robotic arm on its chassis',
      },
    ],
    links: [
      { label: 'Read on IEEE Xplore', href: 'https://ieeexplore.ieee.org/abstract/document/10434550' },
    ],
  },
  {
    slug: 'sludge_alert',
    title: 'Sludge Alert Detection',
    meta: 'October 2023 · Individual project',
    summary: [
      'I built a prototype that alerts the user when the sludge in a water tank rises past a set level, signaling that the tank needs cleaning. The prototype was designed to measure sludge with the tank empty.',
      'An HC-SR04 ultrasonic sensor measures the distance to the sludge surface. The Arduino UNO converts the echo time to centimeters and sounds a piezo buzzer when the distance drops below a 4 cm threshold. I simulated the circuit in TinkerCAD, built it in hardware, and produced the Gerber files in KiCad.',
    ],
    tools: ['Arduino UNO R3', 'HC-SR04 ultrasonic sensor', 'Piezo buzzer', 'C++ / Arduino IDE', 'TinkerCAD', 'KiCad'],
    images: [
      {
        src: sludgeCircuit,
        alt: 'Circuit diagram of an Arduino UNO wired to an HC-SR04 ultrasonic sensor and a piezo buzzer',
        caption: 'The sludge alert circuit, simulated in TinkerCAD',
      },
    ],
    links: [
      { label: 'View on GitHub', href: 'https://github.com/LakshmiPriyaVutukuri/Sludge-Alert-Detection-Mini-Project' },
    ],
  },
];
