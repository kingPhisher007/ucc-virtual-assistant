// ============================================
// SCHOOL DATA - Add more JSON data here
// ============================================
const schoolData = {

      // School Information //
   SchoolInformation: {
    name: "University of Cape Coast",
    shortName: "UCC",
    established: "October 1962 as University College; attained full independent university status on October 1, 1971",
    inauguration: "15th December, 1962",
    legalBasis: [
      "The University of Cape Coast Act, 1971 (Act 390)",
      "University of Cape Coast Law, 1992 (PNDC Law 278)"
    ],
    motto: "Veritas Nobis Lumen (Truth, Light, and Liberty)",
    location: {
      city: "Cape Coast",
      region: "Central Region",
      country: "Ghana",
      campus: "Two main campuses: Southern and Northern Campus",
      address: "University Post Office, Cape Coast, Ghana"
    },
    historicalContext: "The University was established out of a dire need for highly qualified and skilled manpower in education. Its original mandate was to train graduate professional teachers for Ghana's second cycle institutions and the Ministry of Education. The city of Cape Coast was the first capital of the former Gold Coast (now Ghana) until it was moved to Accra in 1877. It is known as the 'cradle of education' in Ghana, housing some of the oldest and best-performing schools in the country.",
    accreditation: "Ghana Tertiary Education Commission (GTEC)",
    rankings: {
      ghana: "Topmost ranked University in Ghana",
      westAfrica: "Topmost ranked University in West Africa",
      africa: "Among the top 5 Universities in Africa in the 2022 Times Higher Education World University Rankings",
      global: "Ranks first globally for research influence; Ranked 4th in Africa in 2022"
    },
    statistics: {
      students: "Approximately 32,167 FTE Students",
      academicYear: "October to July (October-February; March-July)"
    },

    coreValues: [
      {
        name: "Excellence",
        description: "UCC seeks to pursue excellence through the creation of standards in teaching, intellectual inquiry and professional practice which inform and permeate all aspects of the University's operations."
      },
      {
        name: "Empowerment", 
        description: "UCC offers opportunities to its employees and products in a manner that empowers them to be agents of change wherever they find themselves."
      },
      {
        name: "Equal Opportunities",
        description: "UCC strives to provide equal opportunity and access to quality education and services to all categories of person regardless of colour, creed, ethnicity, gender, social status and physical ability."
      },
      {
        name: "Ethical Behaviour",
        description: "UCC upholds acts of honesty and responsible behaviour and holds its members accountable for their actions and conduct in a way that promotes integrity of the person and the image of the University."
      }
    ],
    anthem: {
      title: "UCC Anthem",
      lyrics: [
        "UCC, UCC we're the liveliest of them all",
        "UCC, UCC we're the teachers of the nation",
        "We learn to teach; we find out and pass on",
        "We counsel, we guide that all may be enlightened",
        "",
        "UCC, UCC: therefore rise to your call",
        "UCC, UCC: to the call, let us rise",
        "To our call let us rise veritas nobis lumen",
        "",
        "UCC, UCC we're the humblest of them all",
        "UCC, UCC we're the bed rock of all knowledge",
        "Being proud of this we students and workers",
        "In concert shall work that your image may be heightened",
        "",
        "UCC, UCC we're the kindest of them all",
        "UCC, UCC we're the brain-child of Nkrumah",
        "We train; we mould and live by his vision",
        "To impart all virtues that Ghana may be strengthened"
      ]
    },
    contact: {
      main: {
        phone: "+233 (0)33 213 2480",
        email: "info@ucc.edu.gh",
      },

      international: {
        phone: "+233 (0)33 213 2482",
        email: "international@ucc.edu.gh"
      },
      registry: {
        phone: "+233 (0)33 213 2483",
        email: "registry@ucc.edu.gh"
      },
      security: {
        phone: "0332135806",
        emergency: "191",

        fire: {
          emergency: "192",
          direct: ["0557525952", "0205388648", "0291702207", "0299340993"]
        }
      },
      helpdesk: {
        email: "helpdesk@ucc.edu.gh",
        hours: "8:00 AM - 5:00 PM (GMT), Monday-Friday"
      }
    },
    socialMedia: {
      facebook: "https://facebook.com/ucoghofficial",
      twitter: "https://twitter.com/UCC_official",
      instagram: "https://instagram.com/ucc_official",
      linkedin: "https://linkedin.com/school/university-of-cape-coast",
      youtube: "https://youtube.com/@UCCTube"
    }
  }, 

      // ADMINISTRATIVE ORGANIZATION //
  administration: {    
    divisions: [
      {
        name: "CENTRAL ADMINISTRATION",
        departments: [
          "Office of the Vice-Chancellor",
          "Office of Pro Vice-Chancellor",
          "Office of the Registrar",
          "Directorate of Finance",
          "Directorate of Internal Audit",
          "Directorate of Academic Affairs",
          "Directorate of Human Resource",
          "Directorate of Public Affairs",
          "Directorate of Legal Consular and General Services",
          "Directorate of Physical Dev. & Estate Management"
        ]
      },
    ],

    leadership: {
      viceChancellor: {
        name: "Prof. Johnson Nyarko Boampong",
        title: "Vice-Chancellor",
        email: "vc@ucc.edu.gh",
        phone: "+233 (0)33 213 2001",
        office: "VC's Office, Administration Block",
        role: "The Vice-Chancellor, who is the academic and administrative head of the University and chief disciplinary officer, is responsible to the University Council for the overall administration of the University. He/she has to be informed of all important developments and problems in the University, in particular those relating to academic activities, finance, physical developments and student affairs. Apart from his/her functions within the University, the Vice-Chancellor also serves as a spokesperson in relation to the government and external bodies, including the international community."
      },
      proViceChancellor: {
        name: "Denis Worlanyo Aheto",
        title: "Pro Vice-Chancellor",
        email: "provc@ucc.edu.gh",
        phone: "+233 (0)33 213 2002",
        role: "The Pro Vice-Chancellor's Office is one of the offices under the Office of the Vice-Chancellor. The office works in close collaboration with the Office of the Vice-Chancellor. The head, who is the Pro Vice-Chancellor, stands in for the Vice-Chancellor in his/her absence. The Pro Vice-Chancellor provides maximum support to the Vice-Chancellor to enable him/her achieve success in his/her administration."
       
      },
      registrar: {
        name: "Mr. John Kofi Nyan",
        title: "Registrar",
        email: "registrar@ucc.edu.gh",
        phone: "+233 (0)33 213 2003",
        role: "The Registrar is the Secretary of the University Council and the Academic Board as prescribed by the Law and Statutes of the University. The Registrar is responsible to the Vice-Chancellor for the general administration of the University and for providing secretarial services for all bodies and committees as may be established by Statutes. The Registrar is the Chief Administrative Officer of the Vice-Chancellor and the University and is therefore the catalyst for the effective administration of the University.",
        responsibilities: [
          "Advice and support to the Vice-Chancellor",
          "Responsibility for good governance through Council and Academic Board and their sub-committees",
          "Framework for policy development, communication and implementation",
          "Students welfare and discipline",
          "Information and records management",
        ]
      },
      financeOfficer: {
        name: "Mrs. Lucy Atta",
        title: "Finance Officer",
        email: "finance@ucc.edu.gh",
        phone: "+233 (0)33 213 2004"
      },
      universityLibrarian: {
        name: "Dr. Emmanuel Newman",
        title: "University Librarian",
        email: "library@ucc.edu.gh",
        phone: "+233 (0)33 213 2005"
      },
      deanInternational: {
        name: "Samuel Bert Boadi-Kusi",
        title: "Dean, Office of International Relations"
      }
    },

    directorates: {
      finance: {
        name: "Directorate of Finance",
        head: "Director of Finance",
        role: "The Director of Finance is the Chief Finance Officer of the University and has general responsibility for the administration of the financial affairs of the University. He/She superintends over all staff of the Directorate of Finance. He/She is also responsible for ensuring that the accounts of the University are prepared in accordance with the Act establishing the University, International Public Sector Accounting Standards and other relevant public legislation."
      },
      internalAudit: {
        name: "Directorate of Internal Audit",
        role: "The Directorate of Internal Audit performs its activities in all areas regarding corporate governance, risk management, control issues and reports administratively to the Vice-Chancellor of the University and functionally to the Audit Committee of the University Council. The Directorate of Internal Audit certifies all payment vouchers and special advances before payments are made as well as physical verification and inspection of all items procured in the University."
      },
      academicAffairs: {
        name: "Directorate of Academic Affairs",
        director: "Mr. Gideon Enoch Abbeyquaye",
        role: "The Directorate shall be headed by the Director who shall be responsible to the Registrar."
      },
      humanResource: {
        name: "Directorate of Human Resource",
        role: "The Directorate of Human Resource manages the human resource of the University to achieve its core mandate. The Directorate is headed by a Director who is responsible to the Registrar and has five Sections and a Unit:",
        sections: [
          "Senior Members Section",
          "Senior Staff Section",
          "Junior Staff Section",
          "Welfare Section",
          "Training and Development Section",
          "Human Resource Information Systems Unit"
        ]
      },
      publicAffairs: {
        name: "Directorate of Public Affairs",
        role: "The Directorate of Public Affairs shall be responsible for building and maintaining the University's corporate image and relationship with key publics, managing events and communicating with the University's stakeholders. The Directorate shall be headed by the Director who shall be responsible to the Registrar."
      },
      legalConsular: {
        name: "Directorate of Legal, Consular and General Services",
        role: "The Directorate of Legal, Consular and General Services is made up of six main sections namely; Legal, Consular, Transport Section, Security Section, Fire Service Unit and the University Printing Press. It also has oversight responsibilities over the University's Pre-tertiary Schools and Post and Telecommunication services. The Directorate by the multiplicity of its functions is the hub around which many of the University's municipal services are centered.",
        sections: [
          "Legal Section",
          "Consular Section",
          "Transport Section",
          "Security Section",
          "Fire Service Unit",
          "University Printing Press"
        ]
      },
      physicalDevelopment: {
        name: "Directorate of Physical Development & Estate Management",
        established: "4th May, 1962",
        formerName: "Development Office",
        role: "The Directorate of Physical Development and Estate Management is an integral part of University of Cape Coast providing Services for Physical Planning and Development of the University. It is also responsible for the maintenance, Estate Management, Grounds and Gardens, Telecommunication, Electricity and Water supply.",
        units: [
          "Works Maintenance Unit",
          "Estate Office",
          "Exchange Unit",
          "Water Section",
          "Electricity Section",
          "Project Section"
        ]
      },
      ictServices: {
        name: "Directorate of Information Communication Technology (ICT) Services",
        acronym: "DICTS",
        role: "The Directorate of Information and Communication Technology Services (DICTS) is responsible to the Vice Chancellor in the performance of his/her duties on strategic matters and to the Registrar on Operational matters. The overall vision is to Develop and Strengthen Integrated ICT Infrastructure and Facilities that robustly supports Teaching and Learning, Research and Outreach, Administration and Support Services.",
        responsibilities: [
          "Improving ICT Networks & Infrastructure",
          "Strengthen implementation, deployment as well as reliable ICT backbone that includes integration of components, network administration and security, maintenance of hardware to support administration and enhance teaching, learning and research",
          "Develop and implement a distinctive integrated management information systems, network/infrastructure, training and skills development for students to ensure all users of the UCC community are supported with the appropriate technology",
          "Designing and developing eLearning resources for students and lecturers across all level of the University",
          "Support the training of ICT based training programmes for staff and students"
        ],
        sections: [
          "Network and Infrastructure Section (NIS)",
          "Management information Section (MIS)",
          "E-learning and Knowledge Management Section (ElKnow)",
          "ICT Training & Support Section (TAS)"
        ]
      },
      researchInnovation: {
        name: "Directorate of Research, Innovation and Consultancy",
        acronym: "DRIC",
        established: "2016",
        role: "The Directorate of Research, Innovation and Consultancy (DRIC) was established with the mandate to supervise and facilitate activities related to research and innovation of faculty members, as well as provide support for the consultancy engagements of faculty. DRIC as enshrined in the 2016 Statutes of the University is mandated to manage all matters relating to research, innovation and consultancy. The Directorate serves as a liaison between the University and Industry. The Directorate creates opportunities for businesses and other cooperate organizations to interact with faculty members and students who have commercially viable innovations/ideas."
      },
      academicPlanning: {
        name: "Directorate of Academic Planning and Quality Assurance",
        role: "The Directorate of Academic Planning and Quality Assurance is directly under the Office of the Vice-Chancellor. The Directorate co-ordinates the planning and monitoring of academic programmes in the University. The Directorate is also the University-wide body with the responsibility for spearheading the quality assurance system of the University including all sections and various mechanisms designed to maintain high performance standards."
      },
      centreForInternationalEducation: {
        name: "Centre for International Education",
        role: "The Centre for International Education manages all matters and programmes relating to international education, serve as an advisory unit to all academic departments on exchange programmes and collaborations. The Centre is also responsible for developing memoranda of understanding with institutions in and outside Ghana and organizing international workshops, seminars and conferences."
      }
    }
  },
      // COLLEGES   //
  colleges: [
    {  
      overview: "The Academic Divisions of the University are made up of Colleges/Faculties/Schools/Departments/Institutes/Centres and Units headed by Provost/Deans/Heads of Department/ Directors and Coordinators. The basic operational units of the various Colleges/Faculties/Schools are the Teaching and Research Departments. The role of Colleges/Faculties/Schools is to coordinate the work of the Departments and to give them additional thrust and purpose, while the Academic Board is the supreme academic authority and policy-making body.",
      provosts: "Colleges are headed by Provosts who are responsible for giving general leadership to the Colleges and for maintaining and promoting the efficiency and order of the College in accordance with policies and procedures prescribed by the Law, the Statutes or as may be determined from time to time by Council, the Academic Board and the College Board.",
      deans: "Faculties/Schools are headed by Deans who are responsible for giving general leadership to their Faculties/Schools. All proposals emanating from Departments regarding courses, syllabi, examinations regulations, etc. must be considered and evaluated by Faculty/School and College Boards before they are submitted to the Academic Board for final decision.",
      headsOfDepartment: "They operate their Departments in consultation with their colleagues. Every Department has a Staff/Students Consultative Committee which plans and evaluates the department's programme of work. The Departments are responsible for keeping the syllabi under review and for initiating changes and improvements. Heads of Department are expected to work in close co-operation with the Provosts, Deans of Faculty/School, the Registrar and the Vice-Chancellor.",
  "college": {
    "name": "College of Agriculture and Natural Sciences",
    "schools": [
      {
        "name": "School of Agriculture",
        "departments": [
          {
            "name": "Department of Agricultural Economics and Extension",
            "website": "https://daee.ucc.edu.gh/",
            "contact": "0247835612",
            "mail": "daee@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Agribusiness",
                  "url": "https://daee.ucc.edu.gh/programmes/agribusiness"
                },
                {
                  "name": "Bachelor of Science (Regular) Agricultural Extension",
                  "url": "https://daee.ucc.edu.gh/programmes/agriculturalextension0"
                },
                {
                  "name": "Bachelor of Science (Regular) Agricultural Extension and Community Development",
                  "url": "https://daee.ucc.edu.gh/programmes/agriculturalextensionandcommunitydevelopment"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) AGRICULTURAL ECONOMICS",
                  "url": "https://daee.ucc.edu.gh/programmes/agriculturaleconomics"
                },
                {
                  "name": "Master of Philosophy (Regular) AGRICULTURAL EXTENSION",
                  "url": "https://daee.ucc.edu.gh/programmes/agriculturalextension"
                },
                {
                  "name": "Master of Science NONGOVERNMENTAL ORGANIZATIONS (NGOS) STUDIES AND MANAGEMENT - (Sandwich)",
                  "url": "https://daee.ucc.edu.gh/programmes/nongovernmentalorganizationsngosstudiesandmanagement"
                },
                {
                  "name": "Master of Philosophy (Regular) NON GOVERNMENTAL STUDIES AND COMMUNITY DEVELOPMENT",
                  "url": "https://daee.ucc.edu.gh/programmes/nongovernmentalstudiesandcommunitydevelopment"
                }
              ]
            }
          },
          {
            "name": "Department of Agricultural Engineering",
            "website": "https://agricengineering.ucc.edu.gh/",
            "contact": "0246901743",
            "mail": "dae@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) AgroProcessing",
                  "url": "https://agricengineering.ucc.edu.gh/programmes/agroprocessing"
                },
                {
                  "name": "Bachelor of Science (Regular) Post Harvest Technology",
                  "url": "https://agricengineering.ucc.edu.gh/programmes/postharvesttechnology"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) Irrigation Technology",
                  "url": "https://agricengineering.ucc.edu.gh/programmes/irrigationtechnology"
                },
                {
                  "name": "Master of Philosophy (Regular) Mechanisation",
                  "url": "https://agricengineering.ucc.edu.gh/programmes/mechanisation"
                }
              ]
            }
          },
          {
            "name": "Department of Animal Science",
            "website": "https://animalscience.ucc.edu.gh/",
            "contact": "0248512096",
            "mail": "das@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) Animal Science (Animal Breeding and Genetics)",
                  "url": "https://animalscience.ucc.edu.gh/programmes/animalscienceanimalbreedingandgenetics"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Animal Science (Animal Nutrition)",
                  "url": "https://animalscience.ucc.edu.gh/programmes/animalscienceanimalnutrition0"
                },
                {
                  "name": "Master of Philosophy (Regular) Animal Science (Animal Nutrition)",
                  "url": "https://animalscience.ucc.edu.gh/programmes/animalscienceanimalnutrition"
                },
                {
                  "name": "Master of Philosophy (Regular) Animal Science (Management of Livestock Enterprises)",
                  "url": "https://animalscience.ucc.edu.gh/programmes/animalsciencemanagementlivestockenterprises0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Animal Science (Management of Livestock Enterprises)",
                  "url": "https://animalscience.ucc.edu.gh/programmes/animalsciencemanagementlivestockenterprises"
                },
                {
                  "name": "Master of Philosophy (Regular) Animal Science (Meat Science and Technology)",
                  "url": "https://animalscience.ucc.edu.gh/programmes/animalsciencemeatscienceandtechnology0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Animal Science (Pasture and Range Management)",
                  "url": "https://animalscience.ucc.edu.gh/programmes/animalsciencepastureandrangemanagement"
                },
                {
                  "name": "Master of Philosophy (Regular) Pasture and Range Management",
                  "url": "https://animalscience.ucc.edu.gh/programmes/pastureandrangemanagement"
                }
              ]
            }
          },
          {
            "name": "Department of Crop Science",
            "website": "https://cropscience.ucc.edu.gh/",
            "contact": "0244379821",
            "mail": "dcs@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Agriculture",
                  "url": "https://cropscience.ucc.edu.gh/programmes/agriculture0"
                }
              ],
              "postgraduate": [
                {
                  "name": "Doctor of Philosophy (Regular) CROP SCIENCE",
                  "url": "https://cropscience.ucc.edu.gh/programmes/cropscience0"
                },
                {
                  "name": "Master of Philosophy (Regular) CROP SCIENCE",
                  "url": "https://cropscience.ucc.edu.gh/programmes/cropscience"
                },
                {
                  "name": "Master of Philosophy (Regular) Seed Science and Technology",
                  "url": "https://cropscience.ucc.edu.gh/programmes/seedscienceandtechnology"
                }
              ]
            }
          },
          {
            "name": "Department of Soil Science",
            "website": "https://soilscience.ucc.edu.gh/",
            "contact": "0206941387",
            "mail": "dss@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Agriculture",
                  "url": "https://soilscience.ucc.edu.gh/programmes/agriculture1"
                }
              ],
              "postgraduate": [
                {
                  "name": "Doctor of Philosophy (Regular) Land Use And Environmental Science",
                  "url": "https://soilscience.ucc.edu.gh/programmes/landuseandenvironmentalscience0"
                },
                {
                  "name": "Master of Philosophy (Regular) Land Use And Environmental Science",
                  "url": "https://soilscience.ucc.edu.gh/programmes/landuseandenvironmentalscience"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Soil Science",
                  "url": "https://soilscience.ucc.edu.gh/programmes/soilscience0"
                },
                {
                  "name": "Master of Philosophy (Regular) Soil Science",
                  "url": "https://soilscience.ucc.edu.gh/programmes/soilscience"
                }
              ]
            }
          }
        ]
      },
      {
        "name": "School of Biological Sciences",
        "departments": [
          {
            "name": "Department of Biochemistry",
            "website": "https://biochemistry.ucc.edu.gh/",
            "contact": "0208735604",
            "mail": "sociology.anthropology@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Biochemistry",
                  "url": "https://biochemistry.ucc.edu.gh/programmes/biochemistry"
                }
              ],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Conservation Biology and Entomology",
            "website": "https://dcbe.ucc.edu.gh/",
            "contact": "",
            "mail": "sociology.anthropology@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Entomology and Wildlife",
                  "url": "https://dcbe.ucc.edu.gh/programmes/entomologyandwildlife"
                }
              ],
              "postgraduate": [
                {
                  "name": "Doctor of Philosophy (Regular) Entomology",
                  "url": "https://dcbe.ucc.edu.gh/programmes/entomology0"
                },
                {
                  "name": "Master of Science (Regular) Entomology",
                  "url": "https://dcbe.ucc.edu.gh/programmes/entomology"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Wildlife Management",
                  "url": "https://dcbe.ucc.edu.gh/programmes/wildlifemanagement0"
                },
                {
                  "name": "Master of Philosophy (Regular) Wildlife Management",
                  "url": "https://dcbe.ucc.edu.gh/programmes/wildlifemanagement"
                }
              ]
            }
          },
          {
            "name": "Department of Environmental Science",
            "website": "https://environmental.ucc.edu.gh/",
            "contact": "0204519826",
            "mail": "sociology.anthropology@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Environmental Science",
                  "url": "https://environmental.ucc.edu.gh/programmes/environmentalscience"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) MPhil. Clean Energy and Environment",
                  "url": "https://environmental.ucc.edu.gh/programmes/mphilcleanenergyandenvironment"
                },
                {
                  "name": "Master of Philosophy (Regular) MPhil. Environmental Science",
                  "url": "https://environmental.ucc.edu.gh/programmes/mphilenvironmentalscience"
                },
                {
                  "name": "Master of Science (Regular) MSc. Clean Energy and Environment",
                  "url": "https://environmental.ucc.edu.gh/programmes/msccleanenergyandenvironment"
                },
                {
                  "name": "Doctor of Philosophy (Regular) PhD. Clean Energy and Environment",
                  "url": "https://environmental.ucc.edu.gh/programmes/phdcleanenergyandenvironment"
                }
              ]
            }
          },
          {
            "name": "Department of Fisheries & Aquatic Science",
            "website": "https://dfas.ucc.edu.gh/",
            "contact": "0209384715",
            "mail": "sociology.anthropology@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Fisheries and Aquatic Science",
                  "url": "https://dfas.ucc.edu.gh/programmes/fisheriesandaquaticscience"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) Aquaculture",
                  "url": "https://dfas.ucc.edu.gh/programmes/aquaculture"
                },
                {
                  "name": "Master of Philosophy (Regular) Fisheries Science",
                  "url": "https://dfas.ucc.edu.gh/programmes/fisheriesscience"
                },
                {
                  "name": "Master of Philosophy (Regular) Oceanography and Limnology",
                  "url": "https://dfas.ucc.edu.gh/programmes/oceanographyandlimnology"
                },
                {
                  "name": "Master of Philosophy (Regular) Integrated Coastal Zone Management",
                  "url": "https://dfas.ucc.edu.gh/programmes/integratedcoastalzonemanagement"
                }
              ]
            }
          },
          {
            "name": "Department of Forensic Sciences",
            "website": "https://forensic.ucc.edu.gh/",
            "contact": "0547196038",
            "mail": "sociology.anthropology@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bsc Forensic Science (Regular)",
                  "url": "https://admissions.ucc.edu.gh/catalogue/programme/bsc-forensic-science"
                }
              ],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Molecular Biology & Biotechnology",
            "website": "https://dmbb.ucc.edu.gh/",
            "contact": "0548624719",
            "mail": "sociology.anthropology@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": [
                {
                  "name": "MSc in Molecular Biology and Biotechnology",
                  "url": "https://dmbb.ucc.edu.gh/postgraduateadmission"
                },
                {
                  "name": "MPhil in Molecular Biology and Biotechnology",
                  "url": "https://dmbb.ucc.edu.gh/programmes"
                },
                {
                  "name": "PhD in Molecular Biology and Biotechnology",
                  "url": "https://dmbb.ucc.edu.gh/postgraduateadmission"
                }
              ]
            }
          }
        ]
      },
      {
        "name": "School of Physical Sciences",
        "departments": [
          {
            "name": "Department of Chemistry",
            "website": "https://chemistry.ucc.edu.gh/",
            "contact": "0543059841",
            "mail": "doc@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Chemistry",
                  "url": "https://chemistry.ucc.edu.gh/programmes/chemistry-0"
                },
                {
                  "name": "Bachelor of Science (Regular) Industrial Chemistry",
                  "url": "https://chemistry.ucc.edu.gh/programmes/industrial-chemistry"
                }
              ],
              "postgraduate": [
                {
                  "name": "Doctor of Philosophy (Regular) Chemistry",
                  "url": "https://chemistry.ucc.edu.gh/programmes/chemistry-2"
                },
                {
                  "name": "Master of Science (Regular) Chemistry",
                  "url": "https://chemistry.ucc.edu.gh/programmes/chemistry-1"
                },
                {
                  "name": "Master of Philosophy (Regular) Chemistry",
                  "url": "https://chemistry.ucc.edu.gh/programmes/chemistry"
                }
              ]
            }
          },
          {
            "name": "Department of Computer Science and Information Technology",
            "website": "https://dcsit.ucc.edu.gh/",
            "contact": "054978213",
            "mail": "dcsit@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Information Technology",
                  "url": "https://dcsit.ucc.edu.gh/programmes/information-technology"
                },
                {
                  "name": "Bachelor of Science (Regular) Computer Science",
                  "url": "https://dcsit.ucc.edu.gh/programmes/computer-science"
                }
              ],
              "postgraduate": [
                {
                  "name": "Doctor of Philosophy (Regular)",
                  "url": "https://dcsit.ucc.edu.gh/programmes/awbc-academics-without-borders-canada"
                }
              ]
            }
          },
          {
            "name": "Department of Laboratory Technology",
            "website": "https://labtech.ucc.edu.gh/",
            "contact": "0556842901",
            "mail": "labtech@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Laboratory Technology",
                  "url": "https://labtech.ucc.edu.gh/programmes/laboratory-technology-0"
                }
              ],
              "postgraduate": [
                {
                  "name": "Bachelor of Science Laboratory Technology - (Sandwich)",
                  "url": "https://labtech.ucc.edu.gh/programmes/laboratory-technology"
                }
              ]
            }
          },
          {
            "name": "Department of Mathematics",
            "website": "https://mathematics.ucc.edu.gh/",
            "contact": "0559173648",
            "mail": "dom@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Mathematics",
                  "url": "https://mathematics.ucc.edu.gh/programmes/mathematics"
                },
                {
                  "name": "Bachelor of Science (Regular) Mathematics-with-Business",
                  "url": "https://mathematics.ucc.edu.gh/programmes/mathematics-business"
                },
                {
                  "name": "Bachelor of Science (Regular) Mathematics-with-Economics",
                  "url": "https://mathematics.ucc.edu.gh/programmes/mathematics-economics"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) Mathematics",
                  "url": "https://mathematics.ucc.edu.gh/programmes/mathematics-1"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Mathematics",
                  "url": "https://mathematics.ucc.edu.gh/programmes/mathematics-0"
                }
              ]
            }
          },
          {
            "name": "Department of Physics",
            "website": "https://physics.ucc.edu.gh/",
            "contact": "0552038749",
            "mail": "dop@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Engineering Physics",
                  "url": "https://physics.ucc.edu.gh/programmes/engineering-physics"
                },
                {
                  "name": "Bachelor of Science (Regular) Meteorology and Atmospheric Physics",
                  "url": "https://physics.ucc.edu.gh/programmes/meteorology-and-atmospheric-physics"
                },
                {
                  "name": "Bachelor of Science (Regular) Physics",
                  "url": "https://physics.ucc.edu.gh/programmes/physics"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) Physics",
                  "url": "https://physics.ucc.edu.gh/programmes/physics-0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Physics",
                  "url": "https://physics.ucc.edu.gh/programmes/physics-1"
                }
              ]
            }
          },
          {
            "name": "Department of Statistics",
            "website": "https://statistics.ucc.edu.gh/",
            "contact": "0557498162",
            "mail": "dos@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Actuarial Science",
                  "url": "https://statistics.ucc.edu.gh/programmes/actuarial-science"
                },
                {
                  "name": "Bachelor of Science (Regular) Statistics",
                  "url": "https://statistics.ucc.edu.gh/programmes/statistics"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Science (Regular) Statistics",
                  "url": "https://statistics.ucc.edu.gh/programmes/statistics-1"
                },
                {
                  "name": "Master of Philosophy (Regular) Statistics",
                  "url": "https://statistics.ucc.edu.gh/programmes/statistics-0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Statistics",
                  "url": "https://statistics.ucc.edu.gh/programmes/statistics-2"
                }
              ]
            }
          },
          {
            "name": "Department of Water and Sanitation",
            "website": "https://dws.ucc.edu.gh/",
            "contact": "0596384170",
            "mail": "dws@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (Regular) Water and Sanitation",
                  "url": "https://dws.ucc.edu.gh/programmes/water-and-sanitation"
                }
              ],
              "postgraduate": []
            }
          }
        ]
      },
      {
        "name": "School of Sustainable Engineering",
        "departments": [
          {
            "name": "Department of Agricultural and Mechanical Engineering",
            "website": "https://dame.ucc.edu.gh/",
            "contact": "0592748913",
            "mail": "dame@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor Of Science In Agricultural Engineering",
                  "url": "https://dame.ucc.edu.gh/bsc.agric_engineering"
                }
              ],
              "postgraduate": [
                {
                  "name": "MASTER OF PHILOSOPHY IN AGRICULTURAL MECHANISATION AND MACHINERY TECHNOLOGY",
                  "url": "https://dame.ucc.edu.gh/postgrad_prog.dame"
                },
                {
                  "name": "PhD IN AGRICULTURAL MECHANISATION AND MACHINERY TECHNOLOGY",
                  "url": "https://dame.ucc.edu.gh/postgrad_prog.dame"
                }
              ]
            }
          },
          {
            "name": "Department of Chemical and Renewable Energy Engineering",
            "website": "https://dcree.ucc.edu.gh/",
            "contact": "0598150364",
            "mail": "dcree@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "BACHELOR OF SCIENCE (CHEMICAL ENGINEERING)",
                  "url": "https://dcree.ucc.edu.gh/undergraduate.dcree"
                }
              ],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Civil and Environmental Engineering",
            "website": "https://dcee.ucc.edu.gh/",
            "contact": "0594029681",
            "mail": "dcee@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science in Water and Public Health Engineering",
                  "url": "https://dcee.ucc.edu.gh/undergraduate.dcee"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Science / Philosophy In Coastal Engineering",
                  "url": "https://dcee.ucc.edu.gh/postgraduate.dcee"
                },
                {
                  "name": "PhD In Coastal Engineering",
                  "url": "https://dcee.ucc.edu.gh/postgraduate.dcee"
                }
              ]
            }
          }
        ]
      }
    ]
  }
},   // End of college 1(CAANS). Next is college 2

    {
  "college": {
    "name": "College of Education Studies",
    "facultiesAndSchools": [
      {
        "name": "Faculty of Educational Foundations",
        "departments": [
          {
            "name": "Department of Basic Education",
            "website": "https://basiceducation.ucc.edu.gh/",
            "contact": "0267354098",
            "mail": "dbe@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Education Basic Education (Regular)",
                  "url": "https://basiceducation.ucc.edu.gh/programmes/basiceducation"
                },
                {
                  "name": "Bachelor of Education Early childhood education (Sandwich)",
                  "url": "https://basiceducation.ucc.edu.gh/programmes/earlychildhoodeducation3"
                },
                {
                  "name": "Bachelor of Education Early childhood education (Regular)",
                  "url": "https://basiceducation.ucc.edu.gh/programmes/earlychildhoodeducation1"
                },
                {
                  "name": "Bachelor of Education Early childhood educationcloned - (Sandwich)",
                  "url": "https://basiceducation.ucc.edu.gh/programmes/earlychildhoodeducationcloned"
                },
                {
                  "name": "Bachelor of Education JHS Education (Regular)",
                  "url": "https://basiceducation.ucc.edu.gh/programmes/jhseducation"
                },
                {
                  "name": "Bachelor of Education Primary Education (Regular)",
                  "url": "https://basiceducation.ucc.edu.gh/programmes/primaryeducation"
                }
              ],
              "postgraduate": []
            }
          },
          {
            "name": "Counselling Centre",
            "website": "https://counselling.ucc.edu.gh/",
            "contact": "0269804713",
            "mail": "cc@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Education and Psychology",
            "website": "https://dep.ucc.edu.gh/",
            "contact": "0261548976",
            "mail": "dep@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "B.Sc Psychology",
                  "url": "https://dep.ucc.edu.gh/programmes/bscpsychology"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) Clinical Health Psychology",
                  "url": "https://dep.ucc.edu.gh/programmes/clinicalhealthpsychology0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Clinical Health Psychology",
                  "url": "https://dep.ucc.edu.gh/programmes/clinicalhealthpsychology"
                },
                {
                  "name": "Master of Philosophy (Regular) EDUCATIONAL PSYCHOLOGY",
                  "url": "https://dep.ucc.edu.gh/programmes/educationalpsychology0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) EDUCATIONAL PSYCHOLOGY",
                  "url": "https://dep.ucc.edu.gh/programmes/educationalpsychology"
                },
                {
                  "name": "Master of Education (Regular) HISTORY OF EDUCATION",
                  "url": "https://dep.ucc.edu.gh/programmes/historyeducation"
                },
                {
                  "name": "Master of Philosophy (Regular) MEASUREMENT AND EVALUATION",
                  "url": "https://dep.ucc.edu.gh/programmes/measurementandevaluation0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) MEASUREMENT AND EVALUATION",
                  "url": "https://dep.ucc.edu.gh/programmes/measurementandevaluation"
                },
                {
                  "name": "Master of Philosophy (Regular) SOCIOLOGY OF EDUCATION",
                  "url": "https://dep.ucc.edu.gh/programmes/sociologyeducation0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) SOCIOLOGY OF EDUCATION",
                  "url": "https://dep.ucc.edu.gh/programmes/sociologyeducation"
                },
                {
                  "name": "Master of Philosophy (Regular) SPECIAL EDUCATION",
                  "url": "https://dep.ucc.edu.gh/programmes/specialeducation0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) SPECIAL EDUCATION",
                  "url": "https://dep.ucc.edu.gh/programmes/specialeducation"
                }
              ]
            }
          },
          {
            "name": "Department of Guidance and Counselling",
            "website": "https://dgc.ucc.edu.gh/",
            "contact": "0268635204",
            "mail": "docc@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Education (Regular) GUIDANCE AND COUNSELLING",
                  "url": "https://dgc.ucc.edu.gh/programmes/guidanceandcounselling"
                }
              ],
              "postgraduate": [
                {
                  "name": "Doctor of Education (Regular) Guidance and Counselling",
                  "url": "https://dgc.ucc.edu.gh/programmes/guidanceandcounselling1"
                },
                {
                  "name": "Master of Arts (Regular) Guidance and Counselling",
                  "url": "https://dgc.ucc.edu.gh/programmes/guidanceandcounselling0"
                },
                {
                  "name": "Master of Philosophy (Regular) M.Phil Guidance and Counselling",
                  "url": "https://dgc.ucc.edu.gh/programmes/mphilguidanceandcounselling"
                },
                {
                  "name": "Master of Philosophy (Regular) PHIL REHABILITATION",
                  "url": "https://dgc.ucc.edu.gh/programmes/mphilrehabilitation"
                },
                {
                  "name": "Master of Philosophy (Regular) STUDENT AFFAIRS AND SERVICE",
                  "url": "https://dgc.ucc.edu.gh/programmes/studentaffairsandservice"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Ph.D Guidance and Counselling",
                  "url": "https://dgc.ucc.edu.gh/programmes/phdguidanceandcounselling"
                }
              ]
            }
          },
          {
            "name": "Centre for Child Development Research and Referral",
            "website": "https://ccdrr.ucc.edu.gh/",
            "contact": "0274916850",
            "mail": "ccdrr@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          }
        ]
      },
      {
        "name": "Faculty of Humanities and Social Sciences Education",
        "departments": [
          {
            "name": "Department of Business and Social Sciences Education",
            "website": "",
            "contact": "0278034169",
            "mail": "dbsse@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Arts Education",
            "website": "https://artseducation.ucc.edu.gh/",
            "contact": "0564189073",
            "mail": "dae@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Education (Regular) Arts",
                  "url": "https://artseducation.ucc.edu.gh/programmes/arts-0"
                }
              ],
              "postgraduate": []
            }
          }
        ]
      },
      {
        "name": "Faculty of Science and Technology Education",
        "departments": [
          {
            "name": "Department of Vocational and Technical Education",
            "website": "https://votec.ucc.edu.gh/",
            "contact": "0272659481",
            "mail": "dvte@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Education (Regular) Communication Design",
                  "url": "https://votec.ucc.edu.gh/programmes/communicationdesign"
                },
                {
                  "name": "Bachelor of Education (Regular) Clothing and Textiles",
                  "url": "https://votec.ucc.edu.gh/programmes/clothingandtextiles0"
                },
                {
                  "name": "Bachelor of Education (Regular) Bachelor of Fine Art Education (Painting or Sculpture)",
                  "url": "https://votec.ucc.edu.gh/programmes/bachelorfinearteducationpaintingorsculpture"
                },
                {
                  "name": "Bachelor of Education (Regular) Construction Technology Education",
                  "url": "https://votec.ucc.edu.gh/programmes/constructiontechnologyeducation"
                },
                {
                  "name": "Bachelor of Education (Regular) Food and Nutrition",
                  "url": "https://votec.ucc.edu.gh/programmes/foodandnutrition0"
                },
                {
                  "name": "Bachelor of Education (Regular) Home Economics",
                  "url": "https://votec.ucc.edu.gh/programmes/homeeconomics1"
                },
                {
                  "name": "Bachelor of Education Home Economics - (Sandwich)",
                  "url": "https://votec.ucc.edu.gh/programmes/homeeconomics2"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Regular) Clothing & Textiles",
                  "url": "https://votec.ucc.edu.gh/programmes/clothingandtextiles"
                },
                {
                  "name": "Master of Philosophy (Regular) Family Management",
                  "url": "https://votec.ucc.edu.gh/programmes/familymanagement"
                },
                {
                  "name": "Master of Philosophy (Regular) Food & Nutrition",
                  "url": "https://votec.ucc.edu.gh/programmes/foodandnutrition"
                },
                {
                  "name": "Master of Philosophy (Regular) Home Economics",
                  "url": "https://votec.ucc.edu.gh/programmes/homeeconomics0"
                },
                {
                  "name": "Master of Education Home Economics - (Sandwich)",
                  "url": "https://votec.ucc.edu.gh/programmes/homeeconomics"
                },
                {
                  "name": "Master of Philosophy (Regular) Vocational & Technical Education",
                  "url": "https://votec.ucc.edu.gh/programmes/vocationalandtechnicaleducation"
                }
              ]
            }
          },
          {
            "name": "Department of Science Education",
            "website": "https://scienceeducation.ucc.edu.gh/",
            "contact": "0567903218",
            "mail": "dse@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Education (Regular) BEd Science",
                  "url": "https://scienceeducation.ucc.edu.gh/programmes/bedscience"
                },
                {
                  "name": "Bachelor of Science (Regular) BSc Bachelor of Education",
                  "url": "https://scienceeducation.ucc.edu.gh/programmes/bscbacheloreducation"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy (Sandwich) M.Phil Science Education",
                  "url": "https://scienceeducation.ucc.edu.gh/programmes/mphilscienceeducation"
                },
                {
                  "name": "Master of Science (sandwich) M.Sc Science Education",
                  "url": "https://scienceeducation.ucc.edu.gh/programmes/mscscienceeducation"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Ph.D Science Education",
                  "url": "https://scienceeducation.ucc.edu.gh/programmes/phdscienceeducation"
                }
              ]
            }
          },
          {
            "name": "Department of Health, Physical Education and Recreation",
            "website": "https://hper.ucc.edu.gh/",
            "contact": "0562348917",
            "mail": "dhper@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Education (Regular) HEALTH, PHYSICAL EDUCATION AND RECREATION",
                  "url": "https://hper.ucc.edu.gh/programmes/healthphysicaleducationandrecreation"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Arts (Regular) Health Education",
                  "url": "https://hper.ucc.edu.gh/programmes/healtheducation"
                },
                {
                  "name": "Doctor of Philosophy (Regular) HEALTH PROMOTION",
                  "url": "https://hper.ucc.edu.gh/programmes/healthpromotion"
                },
                {
                  "name": "Master of Education (Regular) Physical Education",
                  "url": "https://hper.ucc.edu.gh/programmes/physicaleducation0"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Physical Education",
                  "url": "https://hper.ucc.edu.gh/programmes/physicaleducation"
                }
              ]
            }
          },
          {
            "name": "Department of Mathematics and ICT Education",
            "website": "https://dmicte.ucc.edu.gh/",
            "contact": "0569851704",
            "mail": "dmie@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Education (Regular) B.Ed Computer Science",
                  "url": "https://dmicte.ucc.edu.gh/programmes/bedcomputerscience"
                },
                {
                  "name": "Bachelor of Education (Regular) B.Ed Mathematics",
                  "url": "https://dmicte.ucc.edu.gh/programmes/bedmathematics"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Education (Regular) M.Ed Information Technology",
                  "url": "https://dmicte.ucc.edu.gh/programmes/medinformationtechnology"
                },
                {
                  "name": "Master of Education (Sandwich) M.Ed Mathematics Education",
                  "url": "https://dmicte.ucc.edu.gh/programmes/medmathematicseducation"
                },
                {
                  "name": "Master of Philosophy (Regular) M.Phil Mathematics Education",
                  "url": "https://dmicte.ucc.edu.gh/programmes/mphilmathematicseducation0"
                },
                {
                  "name": "Master of Philosophy (Sandwich) M.Phil Mathematics Education",
                  "url": "https://dmicte.ucc.edu.gh/programmes/mphilmathematicseducation"
                },
                {
                  "name": "Doctor of Philosophy (Regular) Ph.D Mathematics Education",
                  "url": "https://dmicte.ucc.edu.gh/programmes/phdmathematicseducation"
                }
              ]
            }
          }
        ]
      },
      {
        "name": "School of Educational Development and Outreach",
        "departments": [
          {
            "name": "Center for Teacher Professional Development",
            "website": "https://ctpd.ucc.edu.gh/",
            "contact": "0506143978",
            "mail": "ctpd@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Center for Teaching Support",
            "website": "https://cts.ucc.edu.gh/",
            "contact": "0509821654",
            "mail": "cts@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": [
                {
                  "name": "Master of Education (Regular) Master of Education in Teaching in Higher Education Institution",
                  "url": "https://cts.ucc.edu.gh/programmes/master-education-teaching-higher-education-institution"
                }
              ]
            }
          },
          {
            "name": "Institute of Education",
            "website": "https://ioe.ucc.edu.gh/",
            "contact": "0535560996, 0535410424, 0246337487 (Whatsapp Only), 0332136925, 0332133796",
            "mail": "ioe@ucc.edu.gh, secretary.ioe@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            },
            "affiliatedColleges": [
              {
                "name": "Abetifi College of Education",
                "url": "https://ioe.ucc.edu.gh/abetificollegeofeducation"
              },
              {
                "name": "Atebubu College of Education",
                "url": "https://ioe.ucc.edu.gh/atebubucollegeofeducation"
              },
              {
                "name": "Berekum College of Education",
                "url": ""
              },
              {
                "name": "Christ the Teacher College of Education",
                "url": ""
              },
              {
                "name": "Foso College of Education",
                "url": "https://ioe.ucc.edu.gh/fosocollegeofeducation"
              },
              {
                "name": "Holy Child College of Education",
                "url": ""
              },
              {
                "name": "Holy Spirit College of Education",
                "url": ""
              },
              {
                "name": "Jasikan College of Education",
                "url": ""
              },
              {
                "name": "Kibi Presbyterian College of Education",
                "url": ""
              },
              {
                "name": "Nsawkaw College of Education",
                "url": "https://ioe.ucc.edu.gh/nsawkwacollegeofeducation"
              },
              {
                "name": "Offinso College of Education",
                "url": "https://ioe.ucc.edu.gh/offinsocollegeofeducation"
              },
              {
                "name": "OLA College of Education",
                "url": ""
              },
              {
                "name": "Seventh day Adventist College of Education",
                "url": "https://ioe.ucc.edu.gh/affiliatedcollege/seventhdayadventistcollegeofeducation"
              },
              {
                "name": "St. Ambrose College of Education",
                "url": ""
              },
              {
                "name": "St. Francis College of Education",
                "url": ""
              },
              {
                "name": "St. Monica College of Education",
                "url": ""
              },
              {
                "name": "St. Teresa's College of Education",
                "url": "https://ioe.ucc.edu.gh/stteresacollegeofeducation"
              }
            ]
          }
        ]
      }
    ]
  }
}, // End of college 2 (Education Studies). Next is college 3

  {
  "college": {
    "name": "College of Humanities and Legal Studies",
    "facultiesAndSchools": [
      {
        "name": "Faculty of Arts",
        "departments": [
          {
            "name": "Centre for African and International Studies",
            "website": "https://cais.ucc.edu.gh/",
            "contact": "0503478912",
            "mail": "cais@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Arts (African Studies)",
                  "url": "https://cais.ucc.edu.gh/programmes/bachelor-arts-african-studies"
                }
              ],
              "postgraduate": [],
              "diploma": [],
              "certificate": []
            }
          },
          {
            "name": "Department of Classics and Philosophy",
            "website": "https://dcp.ucc.edu.gh/",
            "contact": "0507689031",
            "mail": "dcp@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Arts",
                  "url": "https://dcp.ucc.edu.gh/programmes/bachelor-arts"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Arts Classics",
                  "url": "https://dcp.ucc.edu.gh/programmes/master-arts-classics"
                },
                {
                  "name": "Master of Arts Philosophy",
                  "url": "https://dcp.ucc.edu.gh/programmes/master-arts-philosophy"
                },
                {
                  "name": "Master of Philosophy Philosophy",
                  "url": "https://dcp.ucc.edu.gh/programmes/master-philosophy-philosophy"
                },
                {
                  "name": "Master of Philosophy Classics",
                  "url": "https://dcp.ucc.edu.gh/programmes/master-philosophy-classics"
                }
              ],
              "diploma": [],
              "certificate": []
            }
          },
          {
            "name": "Department of Communication Studies",
            "website": "https://comstudies.ucc.edu.gh/",
            "contact": "0574910836",
            "mail": "william.ghasi@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Arts Communication Studies",
                  "url": "https://comstudies.ucc.edu.gh/programmes/bachelor-arts-communication-studies"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Arts Communication Studies",
                  "url": "https://comstudies.ucc.edu.gh/programmes/master-arts-communication-studies"
                },
                {
                  "name": "Master of Arts Communication Studies - (sandwich)",
                  "url": "https://comstudies.ucc.edu.gh/programmes/master-arts-communication-studies-sandwich"
                },
                {
                  "name": "Master of Arts Teaching Communicative Skills",
                  "url": "https://comstudies.ucc.edu.gh/programmes/master-arts-teaching-communicative-skills"
                },
                {
                  "name": "Master of Arts Teaching Communicative Skills - (Sandwich)",
                  "url": "https://comstudies.ucc.edu.gh/programmes/master-arts-teaching-communicative-skills-sandwich"
                },
                {
                  "name": "Master of Philosophy Communication Studies",
                  "url": "https://comstudies.ucc.edu.gh/programmes/master-philosophy-communication-studies"
                },
                {
                  "name": "Master of Philosophy Teaching Communicative Skills",
                  "url": "https://comstudies.ucc.edu.gh/programmes/master-philosophy-teaching-communicative-skills"
                }
              ],
              "diploma": [],
              "certificate": []
            }
          },
          {
            "name": "Department of English",
            "website": "https://english.ucc.edu.gh/",
            "contact": "",
            "mail": "doe@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Arts",
                  "url": "https://english.ucc.edu.gh/programmes/bachelor-arts"
                },
                {
                  "name": "Bachelor of English",
                  "url": "https://english.ucc.edu.gh/programmes/ba-english"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Arts English Language",
                  "url": "https://english.ucc.edu.gh/programmes/master-arts-english-language"
                },
                {
                  "name": "Master of Arts Literature in English - (Sandwich)",
                  "url": "https://english.ucc.edu.gh/programmes/master-arts-literature-english-sandwich"
                },
                {
                  "name": "Master of Philosophy English Language",
                  "url": "https://english.ucc.edu.gh/programmes/master-philosophy-english-language"
                },
                {
                  "name": "Master of Philosophy Literature in English - Sandwich",
                  "url": "https://english.ucc.edu.gh/programmes/master-philosophy-literature-english-sandwich"
                },
                {
                  "name": "MAster of Philosophy Literature in English",
                  "url": "https://english.ucc.edu.gh/programmes/master-philosophy-literature-english"
                },
                {
                  "name": "Doctor of Philosophy English Language",
                  "url": "https://english.ucc.edu.gh/programmes/doctor-philosophy-english-language"
                },
                {
                  "name": "Doctor of Philosophy Literature in English",
                  "url": "https://english.ucc.edu.gh/programmes/doctor-philosophy-literature-english"
                }
              ],
              "diploma": [],
              "certificate": [
                {
                  "name": "Proficiency Certificate in English Language",
                  "url": "https://english.ucc.edu.gh/programmes/proficiency-certificate-english-language"
                }
              ]
            }
          },
          {
            "name": "Department of French",
            "website": "https://french.ucc.edu.gh/",
            "contact": "0578602194",
            "mail": "dof@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": [
                {
                  "name": "Doctor of Philosophy French",
                  "url": "https://french.ucc.edu.gh/programmes/doctor-philosophy-french"
                },
                {
                  "name": "Doctor of Philosophy French as a Foreign Language",
                  "url": "https://french.ucc.edu.gh/programmes/doctor-philosophy-french-foreign-language"
                },
                {
                  "name": "Doctor of Philosophy French Language & Didactics",
                  "url": "https://french.ucc.edu.gh/programmes/doctor-philosophy-french-language-and-didactics"
                },
                {
                  "name": "Doctor of Philosophy Comparative Francophone & French Literature & Civilisation",
                  "url": "https://french.ucc.edu.gh/programmes/doctor-philosophy-comparative-francophone-and-french-literature-and-civilisation"
                },
                {
                  "name": "Master of Philosophy French Linguistics - Sandwich",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-french-linguistics-sandwich"
                },
                {
                  "name": "Master of Philosophy French Language & Didactics",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-french-language-and-didactics"
                },
                {
                  "name": "Master of Philosophy Comparative Francophone & French Literature & Civilisation",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-comparative-francophone-and-french-literature-and-civilisation"
                },
                {
                  "name": "Master of Philosophy Linguistics & Didactics",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-linguistics-and-didactics"
                },
                {
                  "name": "Master of Philosophy French - Sandwich",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-french-sandwich"
                },
                {
                  "name": "Master of Philosophy French",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-french"
                },
                {
                  "name": "Master of Philosophy French Literature & Civilisation",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-french-literature-and-civilization"
                },
                {
                  "name": "Master of Philosophy Comparative French & Francophone African Literature & Civilisation",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-comparative-french-and-francophone-african-literature-and-civilization"
                },
                {
                  "name": "Master of Philosophy Comparative French & African Literature & Civilisation",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-comparative-french-and-african-literature-and-civilization"
                },
                {
                  "name": "Master of Philosophy Bilingual Translation",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-bilingual-translation"
                },
                {
                  "name": "Master of Philosophy African Literature & Civilisation",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-african-literature-and-civilization"
                },
                {
                  "name": "Master of Philosophy French Language & Didactics - Sandwich",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-french-language-and-didactics-sandwich"
                },
                {
                  "name": "Master of Philosophy Bilingual Translation - Sandwich",
                  "url": "https://french.ucc.edu.gh/programmes/master-philosophy-bilingual-translation-sandwich"
                },
                {
                  "name": "Master of Philosophy Applied French Linguistics - Sandwich",
                  "url": "https://french.ucc.edu.gh/programmes/master-arts-applied-french-linguistics-sandwich"
                },
                {
                  "name": "Master of Arts Comparative Francophone & French Literature & Civilisation",
                  "url": "https://french.ucc.edu.gh/programmes/master-arts-comparative-francophone-and-french-literature-and-civilisation"
                },
                {
                  "name": "Master of Arts French Language & Didactics",
                  "url": "https://french.ucc.edu.gh/programmes/master-arts-french-language-and-didactics"
                },
                {
                  "name": "Master of Arts Bilingual Translation - Sandwich",
                  "url": "https://french.ucc.edu.gh/programmes/master-arts-bilingual-translation-sandwich"
                }
              ],
              "diploma": [
                {
                  "name": "Diploma in French for Special Purposes - Sandwich",
                  "url": "https://french.ucc.edu.gh/programmes/diploma-french-special-purposes-sandwich"
                }
              ],
              "certificate": []
            }
          },
          {
            "name": "Department of Ghanaian Language and Linguistics",
            "website": "https://gll.ucc.edu.gh/",
            "contact": "0572357941",
            "mail": "dgl@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Arts Linguistics",
                  "url": "https://gll.ucc.edu.gh/programmes/bachelor-arts-linguistics"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Philosophy EWE",
                  "url": "https://gll.ucc.edu.gh/programmes/master-philosophy-ewe"
                },
                {
                  "name": "Master of Philosophy Ghanaian Languages",
                  "url": "https://gll.ucc.edu.gh/programmes/master-philosophy-ghanaian-languages"
                }
              ],
              "diploma": [],
              "certificate": []
            }
          },
          {
            "name": "Department of History",
            "website": "https://history.ucc.edu.gh/",
            "contact": "0243905176",
            "mail": "god@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": [
                {
                  "name": "Master of Arts History",
                  "url": "https://history.ucc.edu.gh/programmes/master-arts-history"
                },
                {
                  "name": "Master of Philosophy History",
                  "url": "https://history.ucc.edu.gh/programmes/master-philosophy-history"
                },
                {
                  "name": "Doctor of Philosophy History",
                  "url": "https://history.ucc.edu.gh/programmes/doctor-philosophy-history"
                }
              ],
              "diploma": [],
              "certificate": []
            }
          },
          {
            "name": "Department of Music & Dance",
            "website": "https://music.ucc.edu.gh/",
            "contact": "0246819430",
            "mail": "domd@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Music",
                  "url": "https://music.ucc.edu.gh/programmes/bachelor-music"
                },
                {
                  "name": "Bachelor of Fine Arts",
                  "url": "https://music.ucc.edu.gh/programmes/bachelor-fine-arts"
                },
                {
                  "name": "Bachelor of Arts Music & Theatre Studies",
                  "url": "https://music.ucc.edu.gh/programmes/bachelor-arts-music-and-theatre-studies"
                },
                {
                  "name": "Bachelor of Arts Dance",
                  "url": "https://music.ucc.edu.gh/programmes/bachelor-arts-dance"
                },
                {
                  "name": "Bachelor of Fine Arts - Sandwich",
                  "url": "https://music.ucc.edu.gh/programmes/bachelor-fine-arts-sandwich"
                }
              ],
              "postgraduate": [
                {
                  "name": "Master of Arts Music",
                  "url": "https://music.ucc.edu.gh/programmes/master-arts-music"
                },
                {
                  "name": "Master of Philosophy Musicology",
                  "url": "https://music.ucc.edu.gh/programmes/master-philosophy-musicology"
                },
                {
                  "name": "Master of Philosophy Ethnomusicology",
                  "url": "https://music.ucc.edu.gh/programmes/master-philosophy-ethnomusicology"
                },
                {
                  "name": "Master of Philosophy Music Composition",
                  "url": "https://music.ucc.edu.gh/programmes/master-philosophy-music-composition"
                },
                {
                  "name": "Master of Philosophy Music Theory & Composition",
                  "url": "https://music.ucc.edu.gh/programmes/master-philosophy-music-theory-and-composition"
                },
                {
                  "name": "Master of Philosophy Music & Education",
                  "url": "https://music.ucc.edu.gh/programmes/master-philosophy-music-education"
                },
                {
                  "name": "Master of Philosophy Music",
                  "url": "https://music.ucc.edu.gh/programmes/master-philosophy-music"
                },
                {
                  "name": "Doctor of Philosophy Ethnomusicology",
                  "url": "https://music.ucc.edu.gh/programmes/doctor-philosophy-ethnomusicology"
                },
                {
                  "name": "Doctor of Philosophy Music Theory & Composition",
                  "url": "https://music.ucc.edu.gh/programmes/doctor-philosophy-music-theory-and-composition"
                },
                {
                  "name": "Doctor of Philosophy Music Education",
                  "url": "https://music.ucc.edu.gh/programmes/doctor-philosophy-music-education"
                },
                {
                  "name": "Doctor of Philosophy Music (Partime)",
                  "url": "https://music.ucc.edu.gh/programmes/doctor-philosophy-music-part-time"
                }
              ],
              "diploma": [],
              "certificate": []
            }
          },
          {
            "name": "Department of Religion and Human Values",
            "website": "https://rhv.ucc.edu.gh/",
            "contact": "0249571082",
            "mail": "drhv@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": [
                {
                  "name": "M.A Religion & Human Values - Sandwich",
                  "url": "https://rhv.ucc.edu.gh/programmes/ma-religion-and-human-values-sandwich"
                },
                {
                  "name": "M . Phil Religious and Human Values",
                  "url": "https://rhv.ucc.edu.gh/programmes/mphil-religion-and-human-values"
                },
                {
                  "name": "Master of Philosophy Religion & Human Values - Sandwich",
                  "url": "https://rhv.ucc.edu.gh/programmes/master-philosophy-religion-and-human-values-sandwich"
                },
                {
                  "name": "Doctor of Philosophy Religion & Human Values",
                  "url": "https://rhv.ucc.edu.gh/programmes/phd-religion-and-human-values"
                }
              ],
              "diploma": [
                {
                  "name": "Diploma in Religion & Human Values - Sandwich",
                  "url": "https://rhv.ucc.edu.gh/programmes/diploma-religion-and-human-values-sandwich"
                }
              ],
              "certificate": []
            }
          },
          {
            "name": "Department of Theatre & Film Studies",
            "website": "https://theatrefilms.ucc.edu.gh/",
            "contact": "0245128794",
            "mail": "dtfs@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Arts Film Studies",
                  "url": "https://theatrefilms.ucc.edu.gh/programmes/bachelor-arts-film-studies"
                },
                {
                  "name": "Bachelor of Arts Theatre Studies",
                  "url": "https://theatrefilms.ucc.edu.gh/programmes/bachelor-arts-theatre-studies"
                }
              ],
              "postgraduate": [],
              "diploma": [],
              "certificate": []
            }
          }
        ]
      }
    ]
  }
}, // End of College 3 (Humanities and Legal Studies). Next is college 4

  {
  "college": {
    "name": "College of Health & Allied Sciences",
    "FacultiesAndSchools": [
      {
        "name": "School of Pharmacy and Pharmaceutical Sciences",
        "departments": [
          {
            "name": "Department of Pharmaceutical Chemistry",
            "website": "https://dpc.ucc.edu.gh/",
            "contact": "0249851736",
            "mail": "dopc@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Pharmaceutical Microbiology",
            "website": "https://dpm.ucc.edu.gh/",
            "contact": "0576204819",
            "mail": "dpm@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Pharmacognosy & Herbal Medicine",
            "website": "https://pharmacognosy.ucc.edu.gh/",
            "contact": "0564918203",
            "mail": "dphm@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Pharmaceutics",
            "website": "https://pharmaceutics.ucc.edu.gh/",
            "contact": "0265941807",
            "mail": "dphc@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Pharmacotherapeutics and Pharmacy Practice",
            "website": "https://dpp.ucc.edu.gh/",
            "contact": "0592184796",
            "mail": "dppp@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          }
        ]
      },
      {
        "name": "School of Medical Sciences",
        "departments": [
          {
            "name": "Department of Anatomy",
            "website": "https://anatomy.ucc.edu.gh/",
            "contact": "0597306841",
            "mail": "dan@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": [],
            }
          },
          {
            "name": "Department of Community Based Experience and Service (COBES)",
            "website": "https://sms.ucc.edu.gh/cobes",
            "contact": "0554629018",
            "mail": "docbes@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Chemical Pathology",
            "website": "https://sms.ucc.edu.gh/chemical_pathology",
            "contact": "0558192736",
            "mail": "dcp@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Community Medicine",
            "website": "https://sms.ucc.edu.gh/community_medicine",
            "contact": "0542069487",
            "mail": "docm@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Haematology",
            "website": "https://sms.ucc.edu.gh/haematology",
            "contact": "0547813926",
            "mail": "doh@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Internal Medicine",
            "website": "https://sms.ucc.edu.gh/internal_medicine_and_therapeutics",
            "contact": "0203625981",
            "mail": "dim@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Obstetrics & Gynaecology",
            "website": "https://sms.ucc.edu.gh/obstetrics_and_gynaecology",
            "contact": "",
            "mail": "dog@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Medical Biochemistry",
            "website": "https://sms.ucc.edu.gh/medical_biochemistry",
            "contact": "0207362849",
            "mail": "dmb@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Medical Education and IT",
            "website": "https://sms.ucc.edu.gh/medical_education_and_it",
            "contact": "0205819473",
            "mail": "dmet@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Microbiology and Immunology",
            "website": "https://sms.ucc.edu.gh/microbiology_and_Immunology",
            "contact": "0248094362",
            "mail": "domi@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Paediatrics & Child Health",
            "website": "https://dpch.ucc.edu.gh/",
            "contact": "0245487109",
            "mail": "dpch@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Pharmacology",
            "website": "https://sms.ucc.edu.gh/pharmacology_home",
            "contact": "0249632851",
            "mail": "dophar@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Physiology",
            "website": "https://sms.ucc.edu.gh/physiology",
            "contact": "",
            "mail": "dophy@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Psychological Medicine & Mental Health",
            "website": "https://sms.ucc.edu.gh/psychological_medicine_and_mental_health",
            "contact": "0241708964",
            "mail": "dopmh@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Surgery",
            "website": "https://sms.ucc.edu.gh/surgery",
            "contact": "0579842137",
            "mail": "dos@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Pathology",
            "website": "https://sms.ucc.edu.gh/pathology",
            "contact": "0571683509",
            "mail": "dop@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Physician Assistant Studies",
            "website": "https://dpas.ucc.edu.gh/",
            "contact": "0577294061",
            "mail": "dpas@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          }
        ]
      },
      {
        "name": "School of Nursing and Midwifery",
        "departments": [
          {
            "name": "Department of Adult Health",
            "website": "https://dan.ucc.edu.gh/",
            "contact": "0579842137",
            "mail": "dah@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Maternal and Child Health",
            "website": "https://dmch.ucc.edu.gh/",
            "contact": "0571683509",
            "mail": "domch@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Mental Health",
            "website": "https://dmh.ucc.edu.gh/",
            "contact": "0577294061",
            "mail": "domh@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Public Health",
            "website": "https://publichealth.ucc.edu.gh/",
            "contact": "0573049826",
            "mail": "doph@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          }
        ]
      },
      {
        "name": "School of Allied Health Sciences",
        "departments": [
          {
            "name": "Department of Biomedical Sciences",
            "website": "https://sahs.ucc.edu.gh/",
            "contact": "0269315047",
            "mail": "dobs@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Medical Laboratory Science",
            "website": "https://medilab.ucc.edu.gh/",
            "contact": "0262746809",
            "mail": "doms@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (BSc.) Medical Laboratory Science (Regular Mode)",
                  "url": ""
                },
                {
                  "name": "Bachelor of Science (BSc.) Medical Laboratory Science (sandwich)",
                  "url": ""
                }
              ],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Nutrition & Dietetics",
            "website": "https://dnd.ucc.edu.gh/",
            "contact": "0268592174",
            "mail": "dond@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science (BSc.) degree in Dietetics (Regular Mode)",
                  "url": ""
                },
                {
                  "name": "Bachelor of Science (BSc.) degree in Nutrition (Regular Mode)",
                  "url": ""
                },
                {
                  "name": "Bachelor of Science (BSc.) degree in Nutrition (Sandwich Mode)",
                  "url": ""
                }
              ],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Health Information Management",
            "website": "https://dhim.ucc.edu.gh/",
            "contact": "0599541823",
            "mail": "dhiohim@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science Health Information Management (Regular Mode)",
                  "url": ""
                },
                {
                  "name": "Bachelor of Science Health Information Management (Sandwich Mode)",
                  "url": ""
                }
              ],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Imaging Technology & Sonography",
            "website": "https://dmist.ucc.edu.gh/",
            "contact": "0593087165",
            "mail": "dits@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science Diagnostic Imaging Technology (Radiography) (Regular Mode)",
                  "url": ""
                },
                {
                  "name": "Bachelor of Science Diagnostic Medical Sonography (Ultrasonography) (Regular Mode)",
                  "url": ""
                }
              ],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Sport & Exercise Science",
            "website": "https://sportscience.ucc.edu.gh/",
            "contact": "0596429807",
            "mail": "doses@ucc.edu.gh",
            "programmes": {
              "undergraduate": [
                {
                  "name": "Bachelor of Science Sport and Exercise Science (Regular Mode)",
                  "url": ""
                }
              ],
              "postgraduate": []
            }
          }
        ]
      },
      {
        "name": "School of Optometry and Vision Science",
        "departments": [
          {
            "name": "Department of Clinical Optometry",
            "website": "https://dco.ucc.edu.gh/",
            "contact": "0506854271",
            "mail": "dco@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Ophthalmic Science",
            "website": "https://dos.ucc.edu.gh/",
            "contact": "0509413608",
            "mail": "dos@ucc.edu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          },
          {
            "name": "Department of Vision Science",
            "website": "https://dvs.ucc.edu.gh/",
            "contact": "0276804391",
            "mail": "dvs@ucc.eu.gh",
            "programmes": {
              "undergraduate": [],
              "postgraduate": []
            }
          }
        ]
      }
    ]
  }
}, //End of College 4 (Health and Allied Sciences). Next is college 5

  {

    college: { }

  }, // And of College 5. End of all Colleges

  ], // Next object should be inserted below

// Library  
// library
library: {
    name: "Sam Jonah Library",
    systemName: "University Library System (ULS)",
    description: "The University Library System (ULS) comprises of the Sam Jonah Library and thirty-one Satellite libraries across the Faculties/Schools/Institutes/Departments. The Library provides both physical and online access to the information resources through the E Library platform.",
    role: "The Library system provides a wide range of scholarly information resources, learning facilities and services to support teaching, learning and research.",
    directions: "<a href='https://maps.app.goo.gl/QUtRKMXRrknUUjzk7' target='_blank' rel='noopener noreferrer'>https://maps.app.goo.gl/QUtRKMXRrknUUjzk7</a>",
    contact: {
      address: "Sam Jonah Library, Northern Campus, opposite the Shuttle bus station, PMB, University of Cape Coast",
      gps: "CC-167-5810",
      phone: "<a href='tel:+233312296323'>+233 31 229 6323</a>",
      email: "<a href='mailto:library@ucc.edu.gh'>library@ucc.edu.gh</a>"
    },
    hours: {
      regularSemester: {
        mondayToFriday: "9am to 10pm",
        saturday: "9am to 8pm",
        sundayAndHolidays: "Closed"
      },
      examinationPeriod: {
        mondayToSaturday: "9am to 5am",
        sundayAndHolidays: "Closed"
      }
    },
    collections: [
      {
        name: "Africana Collection",
        description: "The Africana collection consists of books/materials on Sub-Saharan Africa and the African continent. It also includes books/materials on Ghana and about Africa."
      },
      {
        name: "Reference Books",
        description: "Reference books consist of quick reference materials such as Encyclopedias, Dictionaries, World books, Almanacs, Yearbooks, etc, for research purposes."
      },
      {
        name: "Periodicals",
        description: "Periodical collection consists of print Journals, Magazines, Newsletters, Reports, Newspapers, Government publications, etc"
      },
      {
        name: "Development Information",
        description: "The Development Information is a collection of information resources from the World Bank and other related subjects."
      },
      {
        name: "Library Publications",
        description: "The library publishes the following: Acquisitions Bulletin, Annual Reports Library, Policies, Procedures, and Manuals, Library Research Findings and Technical Reports"
      },
      {
        name: "Electronic Information Resources",
        description: "This is a collection of world-class E journals/E books that the Library subscribes to for academic work through the Consortium of Academic and Research Libraries in Ghana (CARLIGH). E.g., EBSCO host, Emerald, Taylor & Francis, Jstor, etc."
      },
      {
        name: "Past Examination Questions",
        description: "This is a collection of all the Past Examination questions of the University. The resources are available in both print and electronic versions."
      },
      {
        name: "Gallery Collection",
        description: "The University Library houses a collection of records, artefacts, portraits, photographs, trophies, souvenirs, paraphernalia, etc that will help to reconstruct the history of the University."
      },
      {
        name: "Government Publications",
        description: "This is a collection of government publications, including Acts of Parliament, Hansards, etc."
      },
      {
        name: "University Publications",
        description: "This is a collection of publications of the University of Cape Coast, including policies, handbooks, etc."
      },
      {
        name: "E Books",
        description: "A collection of Electronic books for UCC Academic programmes."
      },
      {
        name: "Theses/Dissertations",
        description: "The Theses/Dissertations is a collection of the University's theses/dissertations at various levels over many years."
      },
      {
        name: "UCC Institutional Repository",
        description: "An electronic archive database of the Research outputs of the University, including staff publications."
      }
    ],
    satelliteLibraries: [
      { name: "School of Development Studies Library", location: "On the new block of School of Development Studies (SDS)" },
      { name: "School of Agricultural Library", location: "Last floor of the Faculty of Science Building complex (opposite the school of Nursing)" },
      { name: "School of Business Library", location: "School of Business Building (Opposite College of Distance Education)" },
      { name: "College of Education Library", location: "Ground Floor of the main CES Building", email: "<a href='mailto:ceslibraries@ucc.edu.gh'>ceslibraries@ucc.edu.gh</a>" },
      { name: "Department of Physics Library", location: "Ground floor of the Faculty of Science Building complex (adjacent to the Network and Infrastructure section), formally the Computer Centre" },
      { name: "Department of Mathematics Library", location: "Last (3rd) Floor of the Faculty of Science Building Complex" },
      { name: "Medical School Library", location: "Inside the School of Medical Sciences Building, 1st Floor" },
      { name: "Children Library", location: "Old Library (Southern Campus) on top of the University Press" },
      { name: "Faculty of Science and Technology Education Library", location: "1st floor of Faculty of Humanities and Social Science Education building" },
      { name: "Faculty of Humanities and Social Science Education Library", location: "1st floor of the Faculty of Humanities and Social Science Education building" },
      { name: "Adehye Hall Library", location: "Southern Campus opposite the Senior Staff Association office/VOTEC/Assembly Hall Building" },
      { name: "Oguaa Hall Library", location: "Southern Campus, adjacent Adeshye Hall" },
      { name: "Valco Hall Library", location: "Northern Campus, adjacent Kwame Nkrumah Hall" },
      { name: "University Primary School Library", location: "Southern Campus near KG or the university hospital" },
      { name: "Department of French Library", location: "Faculty of Arts Building (1st) Floor" },
      { name: "Department of English Library", location: "Faculty of Arts Building (1st) Floor Left Wing" },
      { name: "Department of History Library", location: "Faculty of Arts Building, Ground Floor, Right Wing" },
      { name: "Department of African Studies Library", location: "Faculty of Arts Building, Ground Floor" },
      { name: "Department of Geography", location: "Faculty of Social Science Building, 1st Floor" },
      { name: "Department of Economics", location: "Faculty of Social Science Building" },
      { name: "Classics and Philosophy Library", location: "Faculty of Arts Building" },
      { name: "Faculty of Law Library", location: "2nd Floor, Sam Jonah Library" },
      { name: "Department of Hospitality Management Library", location: "Ground floor of the Cafeteria Building, Adjacent ADB Bank" },
      { name: "School of Medical Sciences Library", location: "Cape Coast Teaching Hospital, Towards the Doctors' flats." },
      { name: "Atlantic Hall Library", location: "South Campus adjacent Adeshye Hall" },
      { name: "Casley Hayford (Casford) Hall Library", location: "Northern Campus, adjacent Cafeteria (CBG, ADB, Hospitality) Building" },
      { name: "Kwame Nkrumah Hall Library", location: "Northern Campus, adjacent to VALCO Hall" },
      { name: "Institute of Education Library", location: "Northern Campus, adjacent College of Education Studies" }
    ],
    facultySupport: [
      { college: "College of Humanities and Legal Studies (CHLS)", librarian: "Mr. Theophilus Ocran", phone: "<a href='tel:0246499144'>0246499144</a>", email: "<a href='mailto:theophilus.ocran@ucc.edu.gh'>theophilus.ocran@ucc.edu.gh</a>" },
      { college: "College of Education Studies (CES)", librarian: "Mrs. Nesba Y.A. Armah", phone: "<a href='tel:0547323838'>0547323838</a>", email: "<a href='mailto:nesba.armah@ucc.edu.gh'>nesba.armah@ucc.edu.gh</a>" },
      { college: "College of Distance Education (CODE)", librarian: "Ms. Diana Atuase", phone: "<a href='tel:0550248788'>0550248788</a>", email: "<a href='mailto:diana.atuase@ucc.edu.gh'>diana.atuase@ucc.edu.gh</a>" },
      { college: "College of Agriculture and Natural Science (CANS)", librarian: "Mr. Imoro Osman", phone: "<a href='tel:0557756319'>0557756319</a>", email: "<a href='mailto:osman.imoro@ucc.edu.gh'>osman.imoro@ucc.edu.gh</a>" },
      { college: "College of Health and Allied Sciences (CoHAS)", librarian: "Mrs. Gloria Bosomtwi Amoah", phone: "<a href='tel:0541571808'>0541571808</a>", email: "<a href='mailto:gloria.techiedonkor@ucc.edu.gh'>gloria.techiedonkor@ucc.edu.gh</a>" },
      { college: "Hall Libraries", librarian: "Ms. Mariyama A. Kumah", phone: "<a href='tel:0246132816'>0246132816</a>", email: "<a href='mailto:mariyama.kumah@ucc.edu.gh'>mariyama.kumah@ucc.edu.gh</a>" },
      { college: "School Libraries", librarian: "Ms. Vida Mensah", phone: "<a href='tel:0248813275'>0248813275</a>", email: "<a href='mailto:v.mensah@ucc.edu.gh'>v.mensah@ucc.edu.gh</a>" },
      { college: "Law Library", librarian: "Mr. Frimpong Manso", phone: "<a href='tel:0242187326'>0242187326</a>", email: "<a href='mailto:george.manso@ucc.edu.gh'>george.manso@ucc.edu.gh</a>" },
      { college: "College of Education Library", librarian: "Mr. Prince Charles Lawson", phone: "<a href='tel:0244417975'>0244417975</a>", email: "<a href='mailto:prince.lawson@ucc.edu.gh'>prince.lawson@ucc.edu.gh</a>" }
    ],
    researchTools: [
      "Elicit", "Mendeley", "Orcid", "PaperPal", "Research Gates", "Science Space", "Zotero", "Linkedin"
    ],
    scholarlyCommunication: {
      name: "Scholarly Communication Unit",
      description: "The vision of the Vice Chancellor to promote the dissemination of the Research output of the University of Cape Coast to the global Academic and Research Community to enhance the visibility and high ranking of the University led to the establishment of the Scholarly Communication Unit at the Sam Jonah Library. The Scholarly Communication Unit will offer resources and services to support the UCC Journals, Editors, Researchers and Students on Scientific Publishing.",
      vision: "To be a one stop centre of excellence to support scholarly communication at the University of Cape Coast.",
      mission: "To promote the dissemination of the research output of the University to the global academic community and enhance the visibility of the University.",
      objectives: [
        "Develop, implement and evaluate sustainable services and policies that supports scholarly communication at UCC.",
        "Ensure the sustainability of UCC Journals.",
        "Provide technical support for the Editorial Boards/Editors, Researchers, Reviewers, Students etc in Scientific Publishing.",
        "Develop an institutional Repository for UCC Journals.",
        "Deploy integrated technologies for managing the Backfiles of UCC Journals",
        "Provide appropriate training for the Editorial Boards, Editors, Researchers, Reviewers, Authors, Administrators, Students etc.",
        "Conduct Research in the area of Scholarly Communication.",
        "Promote academic excellence and scholarship through the support of Research and Publications.",
        "Ensure that the Editorial Boards and Editors adheres to both local and international standards and practices."
      ],
      services: [
        "Provide technical support for the various Editorial Boards of UCC Journals.",
        "Provide training for the Editorial Board Members, Reviewers, Administrators, Researchers, Authors and Students on emerging issues in scholarly communication.",
        "Publicise UCC Journals both at the local and international levels",
        "Develop an Institutional Repository by archiving the back files of the UCC Journals."
      ],
      location: "The Scholarly Communication Unit is located at the 2nd Floor, Sam Jonah Library."
    },
    borrowing: {
      eligibility: [
        "Students",
        "Academic Staff",
        "Administrative Staff",
        "Part-time Faculty Staff",
        "Retired Staff",
        "Spouses or Dependents of Staff",
        "Alumni",
        "Permitted Researchers and other users"
      ],
      limits: [
        "Undergraduate students: maximum of six (6) books/items at a time",
        "Graduate students: maximum of eight (8) books/items at a time",
        "Academic staff: maximum of ten (10) books/items at a time for a semester",
        "Senior members (Faculty, Research, and Senior Members Administrative): materials for a semester duration",
        "External borrowers: maximum of five (5) books/items at a time (must be introduced by a staff member as guarantor)"
      ],
      duration: "Two weeks for students, renewable for another two weeks if no request has been placed.",
      notes: "All citizens will be accorded the privilege of using materials in the Library; however, they may not borrow materials from the Library. The Library reserves the right to recall any or all materials checked out, despite the borrowing period or renewal privileges of the Client."
    },
    fines: [
      "Overdue Books: ₵1.00 per day for a period of twenty-one (21) days, after which the item is charged to LOST status.",
      "Lost item with return: Processing service fee of ₵10.00",
      "Lost item without return: ₵10.00 processing fee plus three times the current cost of the book",
      "Item not returned on recall: ₵5.00 per day until it is returned"
    ],
    divisions: [
      {
        name: "Client Services (CS)",
        description: "Consists of Reference and Students Support, Reader Services and Circulation, Persons with Special Needs, Satellite Libraries. Includes faculty liaisons with direct contact to academic departments.",
        vision: "To become the driving force in ensuring accessibility, inclusiveness, and satisfaction in the Library's information provision to all persons with varied information needs.",
        mission: "To commit the human and material resources of the Library to the utmost satisfaction of clients in all areas of their information needs.",
        mandate: "The Department seeks to render diverse and innovative services to meet the unique information needs of library clients, and periodically evaluate its resources and services to remain relevant to the changing needs of users."
      },
      {
        name: "Collection Management and Technical Services (CMTS)",
        description: "Manages the acquisition, organization, and preservation of library materials."
      },
      {
        name: "Information Technology and Research Support (ITRS)",
        description: "Manages electronic resources, research support, and technology infrastructure."
      }
    ],
    services: [
      {
        category: "Reference and Students' Support",
        description: "Personal and professional assistance provided to library users seeking information in person, by telephone, live chat or email.",
        subServices: [
          "Subject Clinics: Proficiency courses including computer-assisted learning programmes on difficult subjects such as Mathematics, Sciences, Information Technology.",
          "Reading and Learning Habit Support: Programmes to enhance reading habits, eg, Readerthon",
          "Counselling: Support system for students with special needs.",
          "Orientation and User Education: Instructional programmes for first-year and new users on locating and retrieving information."
        ]
      },
      {
        category: "Reader Services and Circulation",
        description: "Manages daily shelving of Library books/materials and ensures that Library study/learning spaces are available and ready for use."
      },
      {
        category: "Electronic Support Services",
        description: "Assists users in using Electronic information resources and provides computing facilities.",
        subServices: [
          "Request for literature searches and articles",
          "Interlibrary loans",
          "Printing/Scanning",
          "Computer-assisted learning",
          "Software installation"
        ]
      },
      {
        category: "Digitisation Services",
        description: "Management of the Institutional Repository and other digitisation activities, including social media management."
      },
      {
        category: "Research Support Services",
        description: "Provides research support for teaching, learning and research activities.",
        subServices: [
          "Learning space for research purposes (Research Commons)",
          "Collaborate and connect students and faculty members on research projects",
          "Research data/outputs management",
          "Training on information literacy skills and the use of e-resources and Turnitin",
          "Assistance in identifying scholarly publishing avenues",
          "Assistance on open access and intellectual property",
          "Assistance in metadata, archiving and digitisation",
          "Scholarly information to support research works",
          "Literature searches for research works",
          "Print/scan/copy services"
        ]
      },
      {
        category: "Distance Learning Library Services",
        description: "Services to Distance Learning students and academic staff.",
        subServices: [
          "Access to electronic information resources (e-library platform)",
          "Research support services",
          "Literature searches",
          "Information literacy instructions",
          "Connect through interactive platforms (WhatsApp, E-mails, SMS, Facebook, Twitter)",
          "Assistance on open access, intellectual property and publishing",
          "Orientation programmes for fresh students",
          "Online chats with librarians (Ask a librarian)",
          "Selective Dissemination of Information (SDI)",
          "Assistance with registration for off-campus access",
          "Work with College of Distance Education to set up physical libraries at various centres"
        ]
      },
      {
        category: "Photocopying Unit",
        description: "Located on the lower ground floor (basement), provides reprographic services at a minimal fee."
      },
      {
        category: "Bindery Services",
        description: "In-house treatment of mutilated, worn out and damaged materials; binding of journal issues or newspapers; commercial binding services for books, dissertations and theses."
      },
      {
        category: "Persons with Special Needs Services (PSNS)",
        description: "Three laboratories (two on lower ground floor, one on ground floor) providing library and information services to persons with special needs for equal access to information."
      }
    ],
    spaces: {
      collectionsSpaces: [
        { name: "Reference Section", location: "Right of the ground floor, Sam Jonah Library", description: "Books on all disciplines offered by the University." },
        { name: "Arts and Humanities Collection", location: "Right wing of the first floor, Sam Jonah Library" },
        { name: "Social Sciences Collection", location: "Left wing of the first floor, Sam Jonah Library", description: "Books on Social Science and Education." },
        { name: "Science Collection", location: "Right wing of the second floor, Sam Jonah Library", description: "Books on Sciences and Medicine." },
        { name: "Law Library", location: "East End of the second floor, Sam Jonah Library", description: "All Law Collection of the University." },
        { name: "Periodicals Section", location: "Left wing of the third floor, Sam Jonah Library", description: "Newspapers, journals, magazines, newsletters and reports." },
        { name: "Africana Unit", location: "East end of the first floor, Sam Jonah Library", description: "Repository of books authored by Africans and about Africa including Ghana. Reference purposes only." },
        { name: "Development Information Unit (DIU)", location: "East end of the third floor, Sam Jonah Library", description: "World Bank Publications and other information on development, statistics and reports." },
        { name: "Gallery Unit", location: "Sam Jonah Library", description: "Acquires and manages items of historical and monumental achievements of the University including souvenirs, paraphernalia, pictures, trophies and inventions." }
      ],
      learningSpaces: "Study areas available throughout the library. Specific spaces include the Research Commons for research purposes."
    },
    findMaterials: {
      catalogue: "<a href='https://koha.ucc.edu.gh/' target='_blank' rel='noopener noreferrer'>https://koha.ucc.edu.gh/</a>",
      institutionalRepository: "<a href='https://uir.ucc.edu.gh/home' target='_blank' rel='noopener noreferrer'>https://uir.ucc.edu.gh/home</a>",
      eDatabases: "Available through the library website",
      uccJournals: "<a href='https://journal.ucc.edu.gh/' target='_blank' rel='noopener noreferrer'>https://journal.ucc.edu.gh/</a>",
      pastQuestions: "<a href='https://pasco.ucc.edu.gh/login' target='_blank' rel='noopener noreferrer'>https://pasco.ucc.edu.gh/login</a>",
      offCampusAccess: "<a href='https://library.ucc.edu.gh/FindMaterials' target='_blank' rel='noopener noreferrer'>https://library.ucc.edu.gh/FindMaterials</a>",
      openEducationalResources: "<a href='https://library.ucc.edu.gh/' target='_blank' rel='noopener noreferrer'>https://library.ucc.edu.gh/</a>",
      trialEDatabases: "Available through the library website"
    },
    rules: [
      "Mutilation or unauthorised removal of library books may attract a fine not less than three times the price current of the book/material and suspension from the University",
      "In the case of theft, suspension or dismissal shall apply",
      "Unless a special arrangement has been made with the University Librarian, all books borrowed from the Library system should be returned at the end of each semester. Failure to comply shall attract a sanction.",
      "Silence must be observed in the Library.",
      "Smoking is not permitted in the Library.",
      "Users must dress decently and behave in a manner that will not be offensive to other Library users",
      "No food, including all types of drinks and fruits, shall be brought into the Library except at designated areas.",
      "Readers' mobile phones must be switched off or kept silent while in the Library.",
      "Users should treat Library materials, equipment, and facilities with care and report any defect or damage to the Library staff.",
      "The Library shall not be responsible for the safekeeping and any loss/damage of belongings left in the Library premises.",
      "Every person using the Library shall have due regard to the right of others to use the Library and shall not interfere with their use.",
      "Rights to use the Library are non-transferable.",
      "On demand, any person leaving the Library shall present for inspection at the Library exit any materials, bags or receptacles being removed.",
      "No person may reserve a seat for a colleague.",
      "Articles left unattended for more than 10 minutes may be removed by Library staff."
    ],
    support: {
      giftsAndDonations: "The library accepts gifts and donations in the form of books, electronic devices, informational resources, cash, or physical items. All donations must be channeled through the University Librarian. Donations shall be evaluated by the same standard as purchased items. The library has sole authority to decide whether all or part of the gift should be added to the collection, discarded, exchanged or given out.",
      cashDonation: "All cheques must be in the name of Sam Jonah Library, UCC",
      electronicPayment: "Bank Draft, etc (See Accountant for more information.)"
    }
  },


// wifi
wifi: {
    name: "Eduroam / UCC WIFI",
    systemName: "University of Cape Coast Wireless Network",
    description: "The campus wireless network provides secure and easy connectivity for staff and students across the university. It utilizes the eduroam infrastructure, allowing users to access the internet on campus and at participating institutions globally.",
    role: "The Wi-Fi system provides reliable, high-speed internet access to support academic research, online learning, administrative tasks, and general connectivity for all university members.",
    prerequisites: [
      "Have your institutional email ready: Staff: username@ucc.edu.gh | Students: username@stu.ucc.edu.gh",
      "Visit Selfservice to reset your password if applicable (Note: This password reset is strictly for wireless network authentication, not your institutional email).",
      "Forget Eduroam / UCC WIFI network from your device if a previous connection exists."
    ],
    recommended: "The getEduroam App ensures that your device is configured securely and prevents common mistakes.",
    setup: [
      {
        device: "Android",
        methods: [
          {
            type: "Using getEduroam App",
            steps: [
              "Open the Google Play Store.",
              "Search for and install getEduroam.",
              "Launch the app after installation.",
              "Select University of Cape Coast.",
              "Select Profile type: Staff (Eduroam / UCC WIFI - Staff) or Students (Eduroam / UCC WIFI - Student).",
              "Enter your email and password.",
              "Accept certificate if prompted.",
              "Check Wi-Fi to confirm Eduroam / UCC WIFI is active."
            ]
          },
          {
            type: "Using Manual Setup",
            steps: [
              "Turn on your Wi-Fi.",
              "Select Eduroam / UCC WIFI from available networks.",
              "Configure Security: WPA2-Enterprise, EAP: TTLS, Phase 2: PAP.",
              "Enter your email and password.",
              "Leave Anonymous identity blank.",
              "Where applicable, set Certificate option to 'Do not validate'.",
              "Accept certificate (if applicable) and connect."
            ]
          }
        ]
      },
      {
        device: "iPhone / iPad",
        methods: [
          {
            type: "Using getEduroam App",
            steps: [
              "Open App Store and install getEduroam.",
              "Launch app, select University of Cape Coast.",
              "Select Profile type: Staff (Eduroam / UCC WIFI - Staff) or Students (Eduroam / UCC WIFI - Student).",
              "Enter your email and password.",
              "Download configuration profile.",
              "Navigate to Settings → General → VPN & Device Management → Install profile.",
              "Trust certificates.",
              "Connect to Eduroam / UCC WIFI."
            ]
          }
        ]
      },
      {
        device: "macOS",
        methods: [
          {
            type: "Using getEduroam / CAT profile",
            steps: [
              "Visit cat.eduroam.org.",
              "Click on 'download eduroam installer' and select University of Cape Coast.",
              "Select Profile type: Staff (Eduroam / UCC WIFI - Staff) or Students (Eduroam / UCC WIFI - Student).",
              "Download macOS profile.",
              "Open the .mobileconfig file, enter your email and password.",
              "Accept/Trust certificates and connect to Eduroam / UCC WIFI."
            ]
          }
        ]
      },
      {
        device: "Windows",
        methods: [
          {
            type: "Using getEduroam Installer",
            steps: [
              "Visit cat.eduroam.org.",
              "Click on 'download eduroam installer' and select University of Cape Coast.",
              "Select Profile type: Staff (Eduroam / UCC WIFI - Staff) or Students (Eduroam / UCC WIFI - Student).",
              "Download Windows installer for University of Cape Coast.",
              "Run installer, enter email and password.",
              "Click on install, then Finish, and connect to Eduroam / UCC WIFI."
            ]
          },
          {
            type: "Using Manual Setup",
            steps: [
              "Turn on Wi-Fi, and select Eduroam / UCC WIFI.",
              "Enter credentials, accept certificate and connect."
            ]
          }
        ]
      },
      {
        device: "Linux",
        methods: [
          {
            type: "Using getEduroam / CAT script",
            steps: [
              "Visit cat.eduroam.org.",
              "Click on 'download eduroam installer' and select University of Cape Coast.",
              "Select Profile type: Staff (Eduroam / UCC WIFI - Staff) or Students (Eduroam / UCC WIFI - Student).",
              "Download Linux installer profile.",
              "Run 'bash ./filename.sh' in terminal.",
              "Enter credentials, connect to Eduroam / UCC WIFI."
            ]
          },
          {
            type: "Using Manual Setup",
            steps: [
              "Turn on Wi-Fi, and select Eduroam / UCC WIFI.",
              "Enter credentials, accept certificate, connect."
            ]
          }
        ]
      },
      {
        device: "Chromebook",
        methods: [
          {
            type: "Using CAT profile",
            steps: [
              "Visit cat.eduroam.org.",
              "Click on 'download eduroam installer' and select University of Cape Coast.",
              "Select Profile type: Staff (Eduroam / UCC WIFI - Staff) or Students (Eduroam / UCC WIFI - Student).",
              "Download Chromebook profile.",
              "Turn on Wi-Fi and select Eduroam / UCC WIFI.",
              "Enter your email and password and connect."
            ]
          },
          {
            type: "Using Manual Setup",
            steps: [
              "Turn on Wi-Fi, and select Eduroam / UCC WIFI.",
              "Enter credentials, accept certificate, connect."
            ]
          }
        ]
      }
    ]
  },


// Halls of Residence
hallsOfResidence: {
    halls: [
      {
        name: "Adehye Hall",
        head: "Hall Warden",
        type: "Female only"
      },

      {
        name: "Oguaa Hall",
        head: "Hall Warden",
        type: "Mixed"
      },

      {
        name: "Atlantic Hall",
        head: "Hall Master",
        type: "Male only"
      },

      {
        name: "Casely-Hayford Hall",
        head: "Hall Master",
        type: "Male only",
      },

      {
        name: "Valco Hall",
        head: "Hall Master",
        type: "Mixed",
      },

      {
        name: "Kwame Nkrumah Hall",
        head: "Hall Master",
        type: "Mixed",
      },

      {
        name: "Valco Trust Hall",
        head: "Hall Master",
        type: "Mixed"
      },
      {
        name: "Alumni Hall",
        head: "Hall Master",
        type: "Mixed"
      },
      {
        name: "Superannuation Hall",
        head: "Hall Master",
        type: "Mixed"
      },
      {
        name: "University Hall",
        head: "Hall Master",
        type: "Mixed"
      },
      {
        name: "Students Representative Council Hall",
        head: "Hall Master",
        type: "Mixed"
      }
    ],

    governance: {

      juniorCommonRoomCommittee: {
        description: "Subject to these Regulations and the Constitution of each Hall, there shall be established in each Hall a Junior Common Room Committee to be elected by all the Junior members of the Hall. Candidates shall be subjected to vetting by the Hall Council.",
        direction: "Within the general framework of these Regulations and of the Constitution and Regulations of each Hall, the Junior Members of the Halls shall be given full scope to manage their own affairs and participate as fully as is consistent with good order and discipline in the governance and running of the Halls under the direction of the Head of the Hall."
      }
    },
    
    vacationArrangements: {
      personalBelongings: "For purposes of maintenance, fumigation and general cleaning of the Halls, it is important that all students remove their personal belongings from the University premises before going down at the end of each semester, and on finally leaving the University, unless special permission to the contrary is granted by the Hall Master/Warden. Students leave their personal property in the Halls at their own risk.",
      keys: "All keys must be handed in to the Hall Assistants on duty when students leave their Hall; students who fail to do so will pay current commercial rates.",
      vacationResidence: "Students wishing to remain in residence during part or all of the vacation may do so only with the permission of Hall Master/Warden. Students who are granted permission to stay in residence shall pay the current rates and obtain the relevant receipt."
    },

    useOfAppliances: {
      allowed: [
        "Electric Cookers without oven (maximum capacity of 1000 Watts)", "Pressing Iron", "Hand drier", "Computers"
      ],
      prohibited: [
        "microwave oven", "deep freezers", "washing machines", "gas cylinders", "Gas Stoves"
      ],
    },

    commercialActivities: "Selling in the Halls/Hostels by students is strictly prohibited.",

    visitors: {
      responsibility: "Students are to note that it is the responsibility of Hall Assistants to control the flow of human traffic in and out of the Halls/Hostels.",
      visitingHours: {
        weekdays: "Mondays to Fridays 10:00 a.m - 10:00 p.m",
        weekends: "Saturdays Sunday and Public Holidays 10:00 a.m. - 12 Mid-night"
      },
      registration: "All external visitors to the Hall shall register with the Hall Assistants on duty and sign off when leaving.",
      restricted: "Hawkers and errand boys shall not be allowed beyond the Hall Assistants' Lodge.",
      family: "Students shall not be allowed to live in the Hall with their families, guests and visitors.",
      unregisteredVisitors: "Students who entertain unregistered persons will be given a written warning, in the first instance only. Repeat offenders will be ejected from the Hall.",
      rooms: "Visitors should not be entertained in the rooms."
    },

    subLetting: "Sub-Letting of room in Halls by students is prohibited and punishable by rustication for two semesters.",
    illegalOccupancy: "Illegal occupancy in the halls of residence is punishable by rustication/dismissal."
  },
  // SRC
  src: {
    name: "Students' Representative Council (SRC)",
    president: "Mr. NK NTIM",

    functions: [
      "Coordinate and support students’ social, cultural, intellectual, and recreational activities to promote overall student welfare.",
      "Represent and communicate students’ views to the appropriate university authorities.",
      "Build and maintain relationships with students and institutions within and outside Ghana.",
      "Appoint student representatives to serve on relevant university boards and committees.",
      "Foster unity within the university community and maintain ties with alumni.",
      "Document and publish records of student activities."
    ],

    membership: {
      executiveCouncil: [
        "President",
        "Secretary",
        "Treasurer",
        "Coordinating Secretary",
        "Public Relations Officer",
        "General Sports Secretary",
        "Presidents of JCRCs",
        "Hall Representatives",
        "GRASAG President and Secretary",
        "DESAG President and Secretary"
      ],
      
    },


    specialGeneralMeeting: {
      description: "A Special General Meeting of the Students of the University shall be called at the request of not less than 50 members of the students.",
      procedure: "Copies of such requests shall be published on all Hall notice boards and shall contain the agenda, names, registration numbers and signatures of the persons requesting the meeting. No other business shall be considered at such general meeting to be convened within five days of the receipt of the request by the President. In case the President fails to comply with their request without sufficient reasons, the Dean of Students shall be petitioned to intervene."
    },

    elections: {
      timing: "There shall be general elections for student leaders in the second semester of each academic year. The elections shall be held in the last week of March.",
      
      positions: {
        src: [
          "President/Vice President",
          "Secretary",
          "Treasurer",
          "General Sports Secretary",
          "Coordinating Secretary",
          "Public Relations Officer"
        ],
        localNugs: [
          "Local NUGS President",
          "Secretary",
          "Women's Commissioner"
        ],
        grasag: [
          "President/Vice President",
          "Secretary",
          "Treasurer",
          "Financial Secretary",
          "Organising Secretary",
          "Women's Commissioner"
        ],
        jcrc: [
          "President/Vice President",
          "Secretary",
          "Treasurer",
          "SRC Representative(s)"
        ]
      },

      eligibility: "A student shall not be eligible for election to any executive office unless:",
      eligibilityCriteria: [
        "He/she has been in the University for at least one academic year",
        "He/she is eligible to contest elections under his/her hall's constitution",
        "He/she has good academic standing; that is a CGPA of at least 2.5 at the time of standing for the election",
        "He/she has paid his/her school fees in full",
        "He/she is a person of compos mentis (sound mind)"
      ],

      disqualifications: "A student shall not qualify for election to any executive office if:",
      disqualificationCriteria: [
        "He/she has a criminal record",
        "He/she has violated any university regulations or been found guilty of any misconduct or any act which constitute a criminal offence under the Constitution of Ghana",
        "He/she is a repeating candidate at the time of standing for the election",
        "He/she has been adjudged or otherwise declared to have misappropriated funds or conducted himself/herself in such a manner as to cause depreciation, loss or otherwise in respect of any cash or property entrusted to him/her",
        "He/she has been found by any committee of enquiry to be incompetent to hold any office or is a person in respect of whom a committee or commission of inquiry has found that while holding any office, he/she has acquired assets unlawfully or defrauded or misused or abused his/her office or wilfully acted in a manner prejudicial to the interest of students"
      ],

      vettingCommittee: {
        composition: "A Vetting Committee shall be constituted with two senior members, one of whom shall chair the Committee and one junior member from each hall. The Registrar's representative at the Office of the Dean of Students shall be a Member/Secretary.",
        functions: [
          "Vet all legible and qualified candidates who have filed their nomination forms to contest elections",
          "Have the power to disqualify a candidate based on any justifiable grounds",
          "Receive memos and review them within 48 hours from the time of submission",
          "Have the right to compel petitioners to appear before it",
          "Exercise any other functions that may be assigned by the Dean of Students from time to time"
        ],
        results: "The results of vetting shall be declared by the Chairperson of the Vetting Committee within 48 hours after the vetting. Without prejudice to the eligibility and qualification criteria above, a person must obtain 50% of the vetting score to pass as a candidate"
      },

      voting: {
        hours: "Voting shall start at 7:00a.m. at each polling station and close at 5:00p.m.",
        supervision: "Voting shall be supervised by the Returning Officer in the presence of all polling agents."
      },

      declarationOfResults: {
        provisional: "Returning Officers shall declare the provisional results at the various polling stations at the close of elections.",
        final: "The EC Chairperson shall declare the final results within 24 hours after the close of polls."
      },

      electoralOffences: [
        "Campaigning by candidate or through his or her agents on the day prior to the voting day and on the voting day",
        "Sighting of any campaign materials within 100m radius of the polling stations on the voting day",
        "Display of banners, posters, handbills, teasers and other related materials anywhere in the University and its immediate environs before the lifting of the banned-on elections is prohibited"
      ],

      otherRules: [
        "A person can be considered an aspirant only after he/she has been vetted and has been so put up by the Electoral Commission",
        "An aspiring President shall nominate his/her running mate (Vice) before filing his/her nomination and the two shall be vetted together",
        "In the case of JCRC, there shall be a ratio of one (1) SRC Representative to a thousand (1000) students",
        "An aspirant who wishes to withdraw before the elections may do so by formal writing at most 72 hours to the voting day; a withdrawal, however, shall be granted on terms that the Electoral Commission deems fit",
        "Voting during elections shall be open to all registered regular students of the University of Cape Coast",
        "Voting shall be between the hours of 7:00a.m.and 5:00p.m. In the unlikely event of a late start of voting, the time lapsed may be extended/credited beyond 5.00 p.m. but in consultation with the polling agents",
        "Clubs/Associations elections shall conform to this election guide"
      ],

    
      pollingAgents: "Each candidate fully certified as an aspirant by the Electoral Commission shall appoint one (1) polling agent per polling station, whose name shall reach the Electoral Commission at least one clear week before the voting day.",
      independence: "Except as provided in the Statutes, Students' Handbook and any other University regulations, in the performance of its functions, the Electoral Commission shall not be subject to the direction or control of any person or authority.",
      tenure: "A student elected under this provision shall hold office for a term of one academic year.",
      handingOver: "The Executive Officers shall hand over to newly elected Executive Officers within fourteen (14) days after declaration of the final election results. All Officers (SRC, JCR, and Local NUGS) shall prepare elaborate handing over notes for documentation. Such handing over notes shall be approved by the Dean of Students or Hall Master/Warden before clearance.",

    }

  },

    //Counselling 
  counsellingCentre: {
    services: {
      academicCareerCounselling: [
        "Study habits",
        "Choice of academic programmes",
        "Career implications for the various programmes",
        "Postgraduate programmes available in the University and other Universities in Ghana and abroad"
      ],
      personalSocialCounselling: [
        "Inability to cope with the demands and the general life at the University",
        "Phobia of any type (e.g., fear of examination, fear to interact with people)",
        "Depression and the feeling of committing suicide",
        "Addiction to alcohol and drugs",
        "Undesirable personal habits (stammering, shyness, extravagant behaviour, etc)",
        "Emotional difficulties",
        "Sexual matter (harassment, rape, etc.)",
        "Religious and spiritual matters",
        "Any other personal-social issues students may have"
      ]
    }
  },

  // MATRICULATION //
  matriculation: {
    ceremony: "A Matriculation Ceremony is held in the first Semester for the purpose of formally admitting into the University, all new students entering bachelor degree, postgraduate degree, diploma, and any other programmes. Attendance at the ceremony is compulsory and no new student is allowed to remain in the University or take any University examination unless he/she has been duly matriculated.",
    oathText: "I, [name], do solemnly promise to be a loyal member of the University of Cape Coast, to study diligently and to conform to all statutes, regulations, and rules of the University in so far as they concern me. So help me God."
  },

  // ORIENTATION // 
  orientation: {
    timing: "Student Orientation exercises take place at the beginning of each academic year and all fresh men/women are required to be present.",
    purposes: [
      "To welcome fresh students and help them to settle down into University life",
      "To guide them through the registration procedure",
      "To expose them to facilities available in the University",
      "To educate students about the rules and regulations that governs the behaviour of students",
      "To educate students about the Students' Representative Council"
    ]
  },

// Admissions //
  admissions: {
  deadlines: [
    { mode: "REGULAR", start: "8TH MAY 2025", end: "30TH OCTOBER 2025" },
    { mode: "SANDWICH(CAMPUS)", start: "7TH APRIL 2025", end: "20TH JUNE 2025" },
    { mode: "DISTANCE", start: "20TH JUNE 2025", end: "30TH OCTOBER 2025" }
  ],

  applicationFee: {
    eVoucherCost: "Ghanaian Applicants - GH¢220.00"
  },

  applicationProcess: {
    onlinePortal: "https://apply.ucc.edu.gh",
    salesCentres: [
      "Cashier's Office (UCC)",
      "UCC Accra Office",
      "Ghana Post Company",
      "all branches of GCB Bank",
      "ADB Bank",
      "GT Bank",
      "ARB Apex Bank",
      "Republic Bank",
      "Consolidated Bank",
      "Zenith Bank",
      "Prudential Bank",
      "Cal Bank",
      "National Investment Bank",
      "Fidelity Bank",
      "OmniBsic Bank"
    ]
  },

  internationalStudents: {
    internationalApplicants: "https://international.ucc.edu.gh/getting-started",
    contact: "international@ucc.edu.gh",
    visaRequirements: "Visa required to enter Ghana unless from exempted countries; contact nearest Ghanaian Embassy or High Commission",
    uponEntry: "60-90 days initial stay permit; must extend permit for longer stay through Ghana Immigration Service office on campus",
    tuitionFees: "Vary by programme, reviewed annually; contact international@ucc.edu.gh for current fees",
    accommodation: "First-year undergraduate students provided accommodation on campus; continuing students assisted in securing private hostels",
    livingCostEstimates: {
      housing: "$1,200 per year",
      books: "$300 per semester average",
      food: "$1,000 per semester average",
      transportation: "$100 per semester average"
    }
  }
},

// Courses //
courses: {
  definitions: {
    programme: "A programme is a curriculum package that consists of courses and leads to the award of a specific degree, diploma or certificate.",
    course: "A course is an approved self-contained instructional package with a title, code number, stipulated contact hours and credit weighting.",
    coreCourse: "A core or compulsory course is a course that a student is required to take and pass in order to graduate. There are four types of compulsory courses: University-wide compulsory courses, faculty compulsory courses, departmental compulsory courses and programme specific compulsory courses.",
    typesOfCoreCourses: {
      universityCompulsory: [
        "Communicative Skills",
        "General African Studies",
        "Information Literacy Skills",
        "Critical Thinking and Practical Reasoning",
        "Entrepreneurship and New Venture Creation"
      ],
      departmentalCompulsory: "The departmental compulsory courses are courses that are declared core by the department for students at various levels.",
      programmeSpecific: "These are compulsory courses specific to certain programmes"
    },
    electiveCourse: "An elective course is a course which is freely chosen by the student within the context of the programme being pursued. The purpose of the elective course is to give the student the opportunity to construct a personal curriculum to meet personal, career or individual academic interests.",
    prerequisiteCourse: "A pre-requisite course is a course which the student must pass before he/she can be allowed to take a higher-level or related course.",
    auditedCourse: "An audited course is a course which the student voluntarily takes for zero credit. The course appears on the student’s transcript but will not count towards the computation of GPA."
  },

  creditWeightings: {
    description: "At UCC, undergraduate taught courses may be assigned 0, 1, 2 or 3 credit(s). Credits are assigned to courses on the basis of contact hours (theory and laboratory/ practical/ field work) as follows:",
    oneCredit: "A one-credit course is a course which has either one contact hour theory class per week for one semester, or two or three contact hours laboratory/ practical/ field work per week for one semester",
    twoCredit: "A two-credit course is a course which has either two contact hour theory classes per week for one semester, or one hour of theory and two or three hours of laboratory/ practical/ field work per week for one semester",
    threeCredit: "A three-credit course (a full course) is a course which has either three contact hour theory classes per week for one semester, or two contact hour theory classes and two or three hours of laboratory/ practical/ field work per week for one semester"
  }

},

registration: {
  prerequisites: [
    "Paid their fees in full",
    "Obtained information from their respective Departments in respect of the courses on offer for the particular semester"
  ],
  
  action: {
    requiredAction: "Students MUST obtain print outs of the registered courses which should be kept as evidence of registration.",
    consequenceOfNonRegistration: "Students who fail to register by the close of the registration period will not receive any grades even if they attend lectures and take examinations."
  },

  lateRegistration: {
    penalty: "There is a penalty for late registration. Students who fail to register within the first two weeks of re-opening but in the third week will be charged a late registration fee.",
    deadline: "No student will be allowed to register after the third week of re-opening."
  },

  addingDroppingCourses: {
    description: "These are non-compulsory courses that a student can drop latest two weeks after the end of registration.",
    eligibility: "Adding or dropping of courses can be done by registered students ONLY.",
    deadline: "The deadline for adding or dropping is 21 days after the beginning of lectures.",
    consequence: "Failure to do so would earn the student an 'E'."
  },

  auditingCourses: {
    procedure: "To audit a course, the student must obtain the consent of the lecturer and the approval of his/her Head of Department.",
    requirements: "A student auditing a course must register and attend all classes and laboratory sessions (if any) in the course.",
    assessment: "The student is required to submit assignments and take quizzes but not end-of-semester examinations unless it is mutually agreed between him/her and the lecturer.",
    transcriptAppearance: "Where there is no evidence of a student having properly audited a course (i.e. no continuous assessment marks), the course will not appear on the student's transcript.",
    limitations: {
      maxPerSemester: "Only one course may be audited per semester.",
      workloadRestriction: "A student who is carrying the maximum workload (18 credits) cannot audit a course in the same semester."
    }
  },

  workload: {
    minimumCreditsForAwards: {
      certificate: "30 credits",
      diploma: "60 credits",
      bachelors: "120 credits"
    }
  }
},
// Academic progression //
academicProgression: {
  level100: {
    progressionRequirements: {
      requirements: [
        "Pass all courses taken (Obtain Grade A - D)",
        "Attain a minimum C.G.P.A. of 1.0"
      ],
      lowGpaWarning: "Students with GPA below 1.0 at the end of the first semester shall be cautioned by the Director (Academic Affairs) and counselled by the Departmental Academic Advisor and/or University Counseling Centre."
    },

    dismissal: {
      criteria: "A Level 100 student who loses a total of twelve (12) credits registered for an academic year (either in the first, second or in both semesters) will be dismissed for poor academic performance.",
      readmission: "Such a student may, however, re-apply for admission into a different program the following academic year."
    },

    supplementaryExaminations: {
      eligibility: "A Level 100 student who loses between 1 and 11 credits in either the first, second or both semesters shall be given an opportunity to write a supplementary end-of-semester examination.",
      grading: "Supplementary end-of-semester examinations for Level 100 students shall be marked over 60 and shall be added to the continuous assessment score which the student would have obtained during the course of the semester.",
      consequenceOfFailure: "The student will be withdrawn for poor academic performance if he/she is unable to pass all the failed courses in the supplementary end-of-semester examination.",
      readmissionAfterFailure: "A level 100 student who fails the supplementary end-of-semester examination and is withdrawn may re-apply for admission the following academic year into the same or different programme."
    }
  },

  level200Upwards: {
    progressionRequirements: {
      requirements: [
        "Attain a minimum C.G.P.A. of 1.0",
        "Accumulate at least 30 credits for the current year",
        "Not lose more than a total of 9 credits in the courses registered at the end of the academic year"
      ],
      failureConsequence: "A student who fails to satisfy conditions A, B or C or all the above shall be placed on probation or asked to be an external candidate depending on the gravity of failure as detailed below:"
    },

    probation: {
      criteria: "If a student fails up to 9 credits, he/she will progress to the next level but will be required to repeat those failed courses. Such a student will have to drop some of the current level courses and substitute them with the failed courses.",
      rules: [
        "A student on probation is not allowed to do more than 18 credits in a semester",
        "A student who is repeating a course will be required to take quizzes, assignments and end-of-semester examination for the repeated course(s)",
        "A student on probation has two (2) chances to pass the failed course(s)",
        "In consultation with his/her academic advisor and with the approval by the Department, a student on probation may be allowed to take another course in place of the failed one if the failed course is not a core course or an essential pre-requisite course",
        "A student on probation must avail himself/herself of and benefit from Academic Advisory and Counselling Services provided by the University."
      ]
    },

    externalCandidate: {
      criteria: "If a student fails a total of 10 to 12 credits, he/she will be allowed to repeat the failed courses as an 'external candidate'. An external candidate is one not taking the full complement of courses and is therefore reading only repeated courses. He/she will register for the repeated courses only and must pass them within one academic year before progressing to the next level.",
      rules: [
        "Will retain the lower level status until he/she meets the requirements for progression to another level",
        "Will be required to attend lectures and practicals, fulfil continuous assessment requirements and pay 60% of the approved University fees and any other fees to be determined by the University from time to time",
        "Must pass the repeated courses at one sitting only. If an external candidate fails to pass any of the failed courses, he/she will be dismissed for poor academic performance",
        "Must avail himself/herself of and benefit from Academic Advisory and Counselling Services provided by the University."
      ],
      limitation: "Students can assume external candidacy only once during their stay in the University."
    },

    dismissal: {
      criteria: "A continuing student who fails more than 12 credits will be dismissed outright."
    },

    lowCgpaWarning: {
      criteria: "Students with the barest minimum C.G.P.A (1.0 - 1.5) at the end of the academic year shall be cautioned by the Director (Academic Affairs) and counselled by their Departmental Academic Advisor."
    }
  },

  level400: {
    specialSupplementaryExaminations: {
      description: "There shall be a special supplementary end-of-semester examinations to be held in August for students who have completed Level 400 but are still trailing level 400 courses.",
      grading: "The special supplementary examinations shall be marked over 60 and shall be added to the continuous assessment which the student would have obtained.",
      consequenceOfFailure: "Students who fail the special supplementary end-of-semester examination or do not avail themselves of same shall repeat the failed courses the following academic year keeping in mind the maximum number of years required for completion of undergraduate programmes. Such students will be required to attend lectures and practicals, fulfill continuous assessment requirements and pay 60% of the approved University fees for the year."
    }
  },

  computationOfResults: {
    repeatedCourses: "If a student passes a repeated course, both the failed grade(s) and new grade(s) will appear on the student's transcript and will be used in the computation of his/her C.G.P.A.",
    replacedCourses: "Where there is a replacement, the grade in the course originally failed will be used in addition to the grade obtained in the replaced course for the computation of the final C.G.P.A."
  },

  attendance: {
  schedule: "Students should note that lectures and examinations would normally be held during the working week (i.e. Monday - Friday). However, being a secular institution, it may become necessary for the University to hold lectures and have examinations over the weekend (Saturdays and Sundays) and on public holidays.",

  attendanceRequirements: {
    rule: "To obtain a grade for a course, the student shall not absent himself/herself for more than the equivalent of three weeks contact hours for the course. This should be cumulative and not necessarily consecutive.",
    
    hourLimits: [
      { creditValue: 1, description: "For a one-credit course, the number of classes missed by the student shall not exceed three (3) hours." },
      { creditValue: 2, description: "For a two-credit course, the number of classes missed by the student shall not exceed six (6) hours." },
      { creditValue: 3, description: "For a three-credit course, the number of classes missed by the student shall not exceed nine (9) hours." }
    ],

    exceptionProcess: {
      description: "If for medical or other justifiable reason, a student cannot meet the class attendance requirement, he/she is advised to defer the programme through the due process as outlined in Deferment of Programme.",
      medicalDeferment: "To get approval for deferment on medical grounds, the student must submit a medical report certified by UCC Director of Health Services."
    }
  }
},

deferment: {
  generalRule: "Deferment of programme shall normally be allowed for students at Levels 200 and above only.",
  
  consultation: "Students who, due to various reasons, wish to defer their programmes should first consult their Academic Advisors for advice.",

  conditions: {
    completionDeadline: "A student may apply for deferment of study provided that the student completes the entire academic programme within the stipulated time limit.",
    duration: "Deferment may be granted for one academic year only (and two years in special cases) within the time-limit allowed for the completion of the programme of study.",
    semesterRestriction: "Where an application for deferment is granted, deferment shall be for one academic year, i.e. deferment shall not be allowed for one semester."
  },

  applicationProcess: {
    timeline: {
      standard: "With the exception of severe and sudden medical conditions, an application for the deferment of study must be made and approved two (2) months before the beginning of the academic year the student wishes to defer.",
      emergency: "Emergency cases shall be dealt with on their own merit."
    },
    
    procedure: "All applications for deferment of programme shall be addressed to the Director (Directorate of Academic Affairs) through the Dean of the relevant Faculty/School who shall forward the application to the Director (Academic Affairs) with his/her comments.",
    
    medicalRequirements: "Where an application for deferment is on medical grounds, the application must be supported by a medical report certified by the Director of Health Services, UCC.",
    
    approvalNecessity: "Students must of necessity obtain approval from the Director (Academic Affairs) before proceeding on deferment.",
    
    resumptionNotification: "Students must notify the University before resumption of academic work."
   }
  },

  academicProgression: {
  graduationRequirements: {
    overview: "To qualify for the award of a degree, candidates must satisfy the following requirements:",
    
    criteria: [
      "Pass all courses taken - general, faculty, or departmental courses",
      "Meet Inter-Faculty course requirements",
      "Accumulate a minimum of 120 credits (including Advance Credits)",
      "Attain a minimum Cumulative Grade Point Average (C.G.P.A) of 1.0",
      "Settle all financial and other obligations to the University",
      "Be in good standing - not barred for disciplinary reasons"
    ]
  }
}
},
// Grading System //
gradingSystem: {
  studentAssessment: {
    overview: "The University operates a combination of Continuous Assessment and End-of-Semester Examination with the following weightings.",
    weightings: [
      { component: "CONTINUOUS ASSESSMENT", percentage: "40%" },
      { component: "END-OF-SEMESTER EXAMINATION", percentage: "60%" }
    ],
    continuousAssessmentDetails: {
      description: "The Continuous Assessment component consists of take-home assignments, class quizzes and tests, term papers, and practical work. This component gives students the chance to demonstrate their abilities on a wider variety of learning tasks and a broader variety of work environments than is possible under formal examination conditions.",
      minimumRequirements: "There shall be a minimum of two (2) Continuous Assessments per course per semester."
    }
  },

  examinationDuration: {
    description: "The duration of end-of-semester examinations is determined by the credit weighting of the course as follows:",
    durationTable: [
      { creditWeighting: "One-Credit Course", duration: "1-1½ hours" },
      { creditWeighting: "Two-Credit Course", duration: "1½-2 hours" },
      { creditWeighting: "Three-Credit Course", duration: "2-3 hours" },
      { creditWeighting: "Practical Courses", duration: "2-3 hours" }
    ]
  },

  gradingScale: {
    description: "The University uses letter grades and corresponding numerical weightings which reflect the quality of performance. Total raw scores (combination of continuous assessment and end-of-semester examination) are converted according to the following scheme:",
    scale: [
      { rawScore: "80 – 100", grade: "A", Point: "4.0", interpretation: "Excellent" },
      { rawScore: "75 – 79", grade: "B+", Point: "3.5", interpretation: "Very Good" },
      { rawScore: "70 – 74", grade: "B", Point: "3.0", interpretation: "Good" },
      { rawScore: "65 – 69", grade: "C+",Point: "2.5", interpretation: "Average" },
      { rawScore: "60 – 64", grade: "C", Point: "2.0", interpretation: "Fair" },
      { rawScore: "55 – 59", grade: "D+", Point: "1.5", interpretation: "Barely Satisfactory" },
      { rawScore: "50 – 54", grade: "D", Point: "1.0", interpretation: "Weak Pass" },
      { rawScore: "Below 50", grade: "E", Point: "0", interpretation: "Fail" }
    ]
  },

  otherGrades: {
    audit: { description: "Audit – The grade point is zero." },
    incomplete: {
      description: "Incomplete (IC) - A student is graded IC when he/she misses one or more components of the assessment.",
      note: "An IC should be rectified within 2 weeks after the release of end-of-semester examinations results."
    }
  },

  gpaComputation: {
    explanation: "Grade Point (GP) is calculated as Grade Point Value multiplied by Credit Hours (CP). Total GP is the sum of all course GPs. GPA = Total GP / Total Credits. CGPA is the cumulative average over all semesters.",
    formula: {
      gp: "GP = Grade Point Value × Credit Hours",
      gpa: "GPA = Total Grade Points / Total Credits",
      cgpa: "CGPA = Sum of all GPAs / Total Number of Semesters"
    },
    example: {
      courses: [
        { code: "INF209", title: "STATISTICAL MODELLING", credits: 3, grade: "A", gradePoint: 12.0 },
        { code: "INF211", title: "COMPUTER ARCHITECTURE", credits: 3, grade: "B", gradePoint: 9.0 },
        { code: "INF213", title: "WEB TECHNOLOGY I", credits: 3, grade: "A", gradePoint: 12.0 },
        { code: "INF215", title: "DATABASE MANAGEMENT I", credits: 3, grade: "A", gradePoint: 12.0 },
        { code: "INF217", title: "PROGRAMMING AND PROBLEM ANALYSIS", credits: 3, grade: "A", gradePoint: 12.0 }
      ],
      totalCredits: 15,
      totalGradePoints: 57,
      gpa: 3.8,
      cgpa: 3.7,
      note: "GPA = 57 / 15 = 3.8; CGPA shown is from previous semesters combined."
    }
  },

  degreeClassification: {
    description: "Undergraduate degree programmes are classified according to the candidate's Cumulative Grade Point Average [CGPA]. The classifications are as follows:",
    classifications: [
      { class: "1st Class", cgpaRange: "3.6 – 4.0" },
      { class: "2nd Class [Upper Division]", cgpaRange: "3.0 – 3.5" },
      { class: "2nd Class [Lower Division]", cgpaRange: "2.5 – 2.9" },
      { class: "3rd Class Division", cgpaRange: "2.0 – 2.4" },
      { class: "Pass", cgpaRange: "1.0 – 1.9" }
    ]
  },

  graduationRequirements: {
    overview: "To qualify for the award of a degree, candidates must satisfy the following requirements:",
    criteria: [
      "Pass all courses taken - general, faculty, or departmental courses",
      "Meet Inter-Faculty course requirements",
      "Accumulate a minimum of 120 credits (including Advance Credits)",
      "Attain a minimum Cumulative Grade Point Average (C.G.P.A) of 1.0",
      "Settle all financial and other obligations to the University",
      "Be in good standing - not barred for disciplinary reasons"
    ]
  }




},

// Certificate collection
certificateCollection: {
  description: "Certificates for programmes pursued successfully shall be ready for collection at designated points on the day of graduation.",
  
  afterGraduationDay: "After the day of graduation, graduates may collect their certificates from the Office of the Director (Directorate of Academic Affairs) upon payment of the appropriate fees.",
  
  longTermUnclaimed: "Certificates not collected five or more years from the date of graduation shall attract a special charge on collection."
},


// alumniAndFriends
alumniAndFriends: {
    name: "UCC Alumni Association",
    systemName: "University of Cape Coast Alumni Relations Office",
    description: "To effectively facilitate internal and external communication, build and cultivate relationships with alumni and friends, and assist to secure public and private resources to promote the mission of the University of Cape Coast.",
    role: "The Alumni Association develops programs and initiatives that aim at facilitating networking among the Alumni and inspires them to have pride in their association with the University of Cape Coast and to tangibly support the University's mission and success.",
    vision: "To cultivate and build stronger relationship among all Alumni of the University and encourage them to project and protect the image of the University of Cape Coast as the University of Choice in Ghana and beyond.",
    mission: "To develop programs and initiatives that aim at facilitating networking among the Alumni and inspire them to have pride in their association with the University of Cape Coast and to tangibly support the University's mission and success.",
    contact: {
      address: "Institutional Advancement Office, Alumni Relations Unit, University of Cape Coast, Cape Coast, Ghana",
      phone: "<a href='tel:+233312296323'>+233 31 229 6323</a>",
      email: "<a href='mailto:alumni@ucc.edu.gh'>alumni@ucc.edu.gh</a>",
      website: "<a href='https://alumni.ucc.edu.gh/' target='_blank' rel='noopener noreferrer'>https://alumni.ucc.edu.gh/</a>",
      donate: "<a href='https://alumni.ucc.edu.gh/donate-to-ucc/' target='_blank' rel='noopener noreferrer'>https://alumni.ucc.edu.gh/donate-to-ucc/</a>"
    },
    benefits: [
      "Online application of transcript, attestation etc.",
      "Free career advice",
      "Access to eLibrary",
      "Invitation to important events",
      "Lifelong Learning opportunities",
      "Special offers and discounts",
      "Networking opportunities with fellow alumni",
      "Mentorship programs with current students"
    ],
    welcomeMessage: "Congratulations on the successful completion of your program of study at the University of Cape Coast. You can now call yourself proud alumni of the University of Choice. You will carry this unique title for the rest of your life. Be inspired and have pride in your association with the University and your fellow Alumni. Joining the Alumni Association will offer you the jealous opportunity to connect with the University and to network with other Alumni. Please note that what you do with your lives define the stature and reputation of your alma mater because you represent its base of support in the corporate world. We gladly welcome you to this wonderful family.",
    currentProjects: [
      {
        name: "Strengthening Alumni Connection with UCC",
        description: "This project is designed to improve upon existing structures and adopt effective strategies to help build the seeming gap between the University of Cape Coast and its alumni. The focus will be on building a reliable database of our alumni and subsequently develop an effective communication structure that will enable the University to connect with alumni through constant communication, events, programs, services, volunteer and philanthropic opportunities.",
        objectives: [
          "To build a formidable and well structured Alumni Database for the University of Cape Coast.",
          "To build effective communication systems towards connecting to our alumni.",
          "To create the needed structures and platform to make the Alumni relevant to the day-to-day running of the University."
        ],
        strategy: [
          "Phase 1: Students Awareness creation of Alumni activities and students-Alumni networking and mentorship",
          "Phase 2: Alumni contact research and building of young alumni database",
          "Phase 3: Building 500 Institutional and International chapters of the Alumni Association",
          "Phase 4: Building effective network systems between the University and the Alumni Association and among members"
        ],
        expectedAccomplishments: [
          "An integrated platform built to help manage the alumni database and communication systems",
          "Alumni of the University properly positioned to play their active role as a key stakeholder"
        ],
        projectManagement: "This project will closely be monitored and constantly evaluated by the Alumni Relations and Communication and Marketing Units under the Institutional Advancement Office with support from the National Alumni Association."
      }
    ],
    advancementCampaign: {
      name: "Agenda 2025 - Looking into the Future",
      description: "An initiative of the University of Cape Coast implemented through its Advancement Office, which seeks to push further the University's mission to secure a University of Choice. It sets a 10-year agenda for the University to achieve specific targets in three main areas, namely: Campus Enhancement, Innovation, and Public Services.",
      target: "To raise an amount of GHS 10 million every appeal year for the next 10 years to realize the campaign objective.",
      pillars: [
        {
          name: "Campus Enhancement",
          description: "The campus enhancement facet of the Advancement Campaign seeks to model the university into a modern university with state of the art facilities to be fine-tuned with technological advancement. Aesthetically, the campaign would facilitate beautiful sceneries that would enhance the physical environment of the University to attract its stakeholders and make it the obvious University of Choice.",
          focusAreas: [
            {
              subPillar: "Campus Beautification",
              description: "Green spaces, courtyards, floral décor, hedgerows, etc."
            },
            {
              subPillar: "Recreational Facilities",
              description: "A recreational complex that would be the hub of all sporting events, a relaxation Centre, swimming pools, gymnasiums and other facilities to help students and the entire university community release stress."
            },
            {
              subPillar: "Road Networks",
              description: "Improvement of roads connecting Amamoma, Ayensu, Apewosika, Kwaprow, and Kwesipra to the main campus road network."
            },
            {
              subPillar: "Washrooms on Campus",
              description: "Facelift for washroom facilities on campus, especially in the halls."
            },
            {
              subPillar: "Paintings and Maintenance Works",
              description: "Regular painting and renovation of buildings and structures on campus."
            },
            {
              subPillar: "Safety and Security",
              description: "Ensuring a safe and secure environment to facilitate the teaching and learning process."
            },
            {
              subPillar: "The Bridge",
              description: "Construction of a footbridge adjacent to the central gate to ensure safe access to the University Primary School across the Cape Coast-Takoradi Highway."
            },
            {
              subPillar: "Security Posts",
              description: "Establishment of security posts at vantage points between the community and the university campus to reduce crime rates."
            }
          ]
        },
        {
          name: "Innovation",
          description: "This component aims at creating at least 1,000 jobs on campus for students, especially needy ones within the set time frame. The University looks forward to having students developing their critical and analytical faculties and making relevant use of same in the area of entrepreneurial activities.",
          focusAreas: [
            "Creating food joints",
            "Laundry services"
          ]
        },
        {
          name: "Public Services",
          description: "Being a University established to provide the educational sector with teachers, we find ourselves located amidst communities deprived of quality basic education with schools regarded as third grade. There is a call on the university to help the young ones within such communities better their grades into second cycle institutions.",
          focusAreas: [
            "Community Teaching Project (CTAP)",
            "Home Based Teaching Programmes"
          ]
        }
      ]
    },
    alumniPortal: {
      description: "Sign up for an account to access alumni services and maintain your connection with the University of Cape Coast.",
      registrationFields: [
        {
          section: "Academic Records",
          fields: [
            "Registration Number",
            "Name on Certificate",
            "Programme of Study",
            "Date of Birth (dd/mm/yyyy)",
            "Year of Admission",
            "Year of Completion"
          ]
        },
        {
          section: "Contact Details",
          fields: [
            "Contact Email",
            "Contact Mobile Phone Number"
          ]
        },
        {
          section: "Identification Details",
          fields: [
            "ID Type (Select Document Type)",
            "ID Number",
            "Document Upload (Accepted file types: pdf, jpg, jpeg, png)"
          ]
        }
      ],
      loginOptions: [
        {
          method: "Sign up for an account",
          description: "Create a new alumni portal account"
        },
        {
          method: "Log in with your students' portal account",
          credentials: [
            "Registration Number",
            "Password"
          ]
        }
      ]
    },
    faq: [
      {
        category: "Academics & Records",
        questions: [
          {
            question: "How can I verify my certificate?",
            answer: "You can request certificate verification through the UCC Registry or academic affairs office. Visit the main university site: <a href='https://www.ucc.edu.gh/' target='_blank' rel='noopener noreferrer'>https://www.ucc.edu.gh/</a>"
          },
          {
            question: "Can I request my transcript online?",
            answer: "Yes. Alumni can request transcripts through the UCC online services portal or by contacting the Registry."
          },
          {
            question: "I lost my certificate. What should I do?",
            answer: "Apply for a replacement certificate through the Registry. You'll need: Police report, Affidavit, and Application form."
          },
          {
            question: "How do I update my alumni details?",
            answer: "Contact the Alumni Relations Office or update your information via official UCC communication channels."
          },
          {
            question: "Can I change my name on my certificate after graduation?",
            answer: "Yes, but you must provide legal proof (e.g., affidavit, gazette publication) and apply through the Registry."
          },
          {
            question: "How long does it take to process a transcript?",
            answer: "Processing typically takes a few days to a few weeks depending on demand and verification requirements."
          },
          {
            question: "Can someone collect my transcript on my behalf?",
            answer: "Yes, with an authorization letter and valid ID."
          },
          {
            question: "Can I access my academic records online?",
            answer: "Some services may be available online, but full records usually require a formal request through the Registry."
          },
          {
            question: "How do I confirm my graduation status?",
            answer: "Contact the Registry or check official graduation lists published by UCC."
          }
        ]
      },
      {
        category: "Library & Research",
        questions: [
          {
            question: "Can alumni use the UCC Library?",
            answer: "Yes, alumni can access the Sam Jonah Library but may need to register for access."
          },
          {
            question: "Can I access online databases like JSTOR from home?",
            answer: "Full access is usually limited to current students/staff. Alumni may get limited/on-site access."
          },
          {
            question: "How do I find academic materials?",
            answer: "Use the library catalogue: <a href='https://library.ucc.edu.gh/find-materials/UCC_Catalogue' target='_blank' rel='noopener noreferrer'>https://library.ucc.edu.gh/find-materials/UCC_Catalogue</a>"
          },
          {
            question: "Can I publish research with UCC after graduating?",
            answer: "Yes. Through the Directorate of Research Innovation and Consultancy (DRIC), you can collaborate on research and publications."
          },
          {
            question: "Are there research funding opportunities for alumni?",
            answer: "Some grants (e.g., Research Support Grants) may involve alumni through collaborations with faculty."
          },
          {
            question: "Do alumni need to pay to use the library?",
            answer: "Some services may require a subscription or registration fee for alumni access."
          },
          {
            question: "Can I borrow books as an alumnus?",
            answer: "Borrowing privileges may be limited; check with the Sam Jonah Library for current policies."
          },
          {
            question: "Are alumni allowed to use study spaces?",
            answer: "Yes, subject to availability and access rules."
          },
          {
            question: "Can I access past theses and dissertations?",
            answer: "Yes, via the institutional repository or library archives."
          },
          {
            question: "Is Wi-Fi available for alumni in the library?",
            answer: "Yes, but access may require registration or temporary credentials."
          }
        ]
      },
      {
        category: "Research & DRIC",
        questions: [
          {
            question: "What is DRIC and how can I benefit?",
            answer: "The Directorate of Research Innovation and Consultancy supports research funding, innovation, and consultancy. Alumni can collaborate on projects or access research opportunities."
          },
          {
            question: "How do I apply for research grants?",
            answer: "Monitor DRIC announcements or contact them directly for funding opportunities."
          },
          {
            question: "Can I commercialize my research with UCC?",
            answer: "Yes. The Industry & Innovation Unit under DRIC supports commercialization and partnerships."
          },
          {
            question: "Can alumni supervise student research?",
            answer: "Typically no, unless formally affiliated with the university (e.g., as staff or adjunct)."
          },
          {
            question: "How do I partner with UCC researchers?",
            answer: "Contact the Directorate of Research Innovation and Consultancy (DRIC) to initiate collaboration."
          },
          {
            question: "Are alumni eligible for research training workshops?",
            answer: "Yes, many workshops are open to alumni depending on the program."
          },
          {
            question: "How do I access UCC research publications?",
            answer: "Through the UCC repository or library databases (access may vary)."
          },
          {
            question: "Can I present at UCC research conferences?",
            answer: "Yes, alumni can submit papers and participate."
          }
        ]
      },
      {
        category: "Career & Networking",
        questions: [
          {
            question: "Does UCC help alumni with jobs?",
            answer: "Yes. Alumni can benefit from career services, networking events, and alumni associations."
          },
          {
            question: "How do I join the alumni association?",
            answer: "Contact the Alumni Relations Office or check official UCC communication channels."
          },
          {
            question: "Can I attend UCC seminars or conferences?",
            answer: "Yes. Many events organized by UCC and DRIC are open to alumni participation."
          },
          {
            question: "Can I collaborate with UCC on consultancy projects?",
            answer: "Yes. Through DRIC's consultancy unit, alumni can engage in projects and partnerships."
          },
          {
            question: "Does UCC organize alumni networking events?",
            answer: "Yes, through the Alumni Relations Office and various faculties."
          },
          {
            question: "Can I mentor current students?",
            answer: "Yes, alumni mentorship programs may be available."
          },
          {
            question: "How do I advertise job opportunities to UCC students?",
            answer: "Contact career services or alumni office to share opportunities."
          },
          {
            question: "Can alumni access career counseling services?",
            answer: "Some career services may be extended to alumni."
          },
          {
            question: "Are there alumni business support programs?",
            answer: "Occasionally, through innovation and entrepreneurship initiatives."
          }
        ]
      },
      {
        category: "Payments & Administration",
        questions: [
          {
            question: "How do I pay for alumni services?",
            answer: "Payments can be made via bank, mobile money, or official UCC payment platforms."
          },
          {
            question: "Can I get receipts for payments made?",
            answer: "Yes, official receipts are issued for all payments."
          },
          {
            question: "Who do I contact for payment issues?",
            answer: "Contact the Finance Directorate or the relevant office handling your request."
          },
          {
            question: "Are there penalties for delayed requests?",
            answer: "Some services may incur additional charges if delayed."
          },
          {
            question: "Can I request multiple documents at once?",
            answer: "Yes, you can request transcripts, certificates, and other documents together."
          }
        ]
      },
      {
        category: "Digital & System Access",
        questions: [
          {
            question: "How do I access UCC online platforms?",
            answer: "Use the official portal: <a href='https://www.ucc.edu.gh/' target='_blank' rel='noopener noreferrer'>https://www.ucc.edu.gh/</a>"
          },
          {
            question: "I forgot my student portal login. What should I do?",
            answer: "Contact UCC IT Services for account recovery assistance."
          },
          {
            question: "How do I stay updated with UCC news?",
            answer: "Follow the official website, social media pages, and alumni communications."
          },
          {
            question: "Can alumni still use their student email?",
            answer: "Usually no. Alumni may need to use personal email for communication."
          },
          {
            question: "How do I reset my UCC portal password?",
            answer: "Contact UCC IT Services for assistance."
          },
          {
            question: "Are there mobile apps for UCC services?",
            answer: "UCC services are mainly web-based via the official portal."
          },
          {
            question: "Can I access e-learning platforms after graduation?",
            answer: "Access is usually restricted after graduation."
          },
          {
            question: "How do I contact IT support?",
            answer: "Reach out via the UCC website or IT support office."
          }
        ]
      },
      {
        category: "Events & Engagement",
        questions: [
          {
            question: "Can alumni attend graduation ceremonies?",
            answer: "Yes, alumni are welcome to attend ceremonies and events."
          },
          {
            question: "Are alumni invited to public lectures?",
            answer: "Yes, many public lectures are open to alumni."
          },
          {
            question: "How do I stay informed about events?",
            answer: "Follow UCC's official website and social media channels."
          },
          {
            question: "Can alumni use campus facilities?",
            answer: "Some facilities are accessible, depending on policies."
          },
          {
            question: "Are there alumni reunions?",
            answer: "Yes, organized periodically by the Alumni Association."
          }
        ]
      },
      {
        category: "Special Services",
        questions: [
          {
            question: "Can alumni access UCC health services?",
            answer: "Access may be limited; check with the university hospital."
          },
          {
            question: "Are there services for alumni with disabilities?",
            answer: "Yes, support services are available upon request."
          },
          {
            question: "Can international alumni access services remotely?",
            answer: "Yes, many services (like transcript requests) can be handled online."
          },
          {
            question: "How do I verify UCC documents abroad?",
            answer: "Use official verification through the Registry or authorized agencies."
          },
          {
            question: "Who do I contact for general alumni inquiries?",
            answer: "Contact the Alumni Relations Office or visit: <a href='https://www.ucc.edu.gh/' target='_blank' rel='noopener noreferrer'>https://www.ucc.edu.gh/</a>"
          }
        ]
      }
    ],
    socialMedia: {
      facebook: "<a href='https://www.facebook.com/UCCAlumni' target='_blank' rel='noopener noreferrer'>UCC Alumni Association</a>",
      twitter: "<a href='https://twitter.com/UCCAlumni' target='_blank' rel='noopener noreferrer'>@UCCAlumni</a>",
      linkedin: "<a href='https://www.linkedin.com/groups/UCC-Alumni-Association' target='_blank' rel='noopener noreferrer'>UCC Alumni Association Group</a>",
      instagram: "<a href='https://www.instagram.com/uccalumni' target='_blank' rel='noopener noreferrer'>@uccalumni</a>"
    },
    callToAction: {
      donate: "<a href='https://alumni.ucc.edu.gh/donate-to-ucc/' target='_blank' rel='noopener noreferrer' style='background-color:#8B0000; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; display:inline-block;'>CLICK TO DONATE</a>",
      description: "An initiative by the Institutional Advancement Office of the University of Cape Coast which is set for implementation in the next ten foreseeable years. The office was established primarily with the vision to create presence among the university's publics and the global community and to keep the promise of the University of Cape Coast as the University of Choice in Ghana and beyond."
    }
  },

  // studentPortal
studentPortal: {
    name: "UCC Student Portal",
    systemName: "University of Cape Coast Student Academic Management System",
    description: "The UCC Student Portal is an online academic management system developed by the University of Cape Coast (UCC) in Ghana. It provides students and faculty with centralized access to academic records, registration services, and institutional communication. The portal is integral to the university's digital infrastructure, supporting both distance and regular learning programs.",
    role: "The Student Portal streamlines student-university interaction, reduces paperwork, and ensures transparency in academic processes. It plays a critical role in supporting the university's distance education programs and aligns with Ghana's push toward higher-education digitalization.",
    keyFacts: {
      institution: "University of Cape Coast (UCC), Ghana",
      purpose: "Academic and administrative self-service platform",
      users: "Undergraduate, postgraduate, and distance students",
      accessUrl: "<a href='https://studentportal.ucc.edu.gh' target='_blank' rel='noopener noreferrer'>https://studentportal.ucc.edu.gh</a>",
      functions: "Registration, results, fees, course management"
    },
    features: [
      "Course registration",
      "Examination results checking",
      "Fee payment processing",
      "Personal profile management",
      "Course scheduling and management",
      "Transcript generation",
      "Semester registration cycles management",
      "Deadline notifications",
      "Exam timetable access",
      "University announcements dissemination"
    ],
    howToLogin: {
      steps: [
        "Go to the UCC Student Portal: <a href='https://students.ucc.edu.gh' target='_blank' rel='noopener noreferrer'>https://students.ucc.edu.gh</a>",
        "Enter your credentials: Username (your student ID) and Password",
        "Click Login"
      ],
      credentials: {
        username: "Student ID",
        password: "Secure password"
      }
    },
    academicAdministration: [
      "Integration with UCC's central database",
      "Automation of key administrative tasks",
      "Semester registration cycles management",
      "Course scheduling",
      "Transcript generation",
      "Deadline notifications",
      "Exam timetable dissemination",
      "University announcements"
    ],
    accessibility: {
      platforms: [
        "Desktop browsers",
        "Mobile browsers"
      ],
      support: "Technical support and password reset services are available through UCC's ICT Directorate.",
      updates: "The portal is regularly updated to enhance security and functionality, reflecting the university's broader digital transformation goals."
    },
    users: {
      students: "Undergraduate, postgraduate, and distance students can manage core academic activities online including course registration, results checking, fee payments, and personal profile viewing.",
      faculty: "Faculty members and administrators use the portal to manage student data, upload grades, and monitor academic progress.",
      security: "Secure login credentials ensure privacy and data integrity."
    },
    importance: [
      "Streamlines student-university interaction",
      "Reduces paperwork",
      "Ensures transparency in academic processes",
      "Supports distance education programs",
      "Aligns with Ghana's higher-education digitalization goals"
    ],
    contact: {
      support: "UCC ICT Directorate",
      helpDesk: "<a href='mailto:ictsupport@ucc.edu.gh'>ictsupport@ucc.edu.gh</a>",
      phone: "<a href='tel:+233312296323'>+233 31 229 6323</a>"
    },
    relatedLinks: {
      mainUniversity: "<a href='https://www.ucc.edu.gh/' target='_blank' rel='noopener noreferrer'>https://www.ucc.edu.gh/</a>",
      studentPortalAlt: "<a href='https://students.ucc.edu.gh' target='_blank' rel='noopener noreferrer'>https://students.ucc.edu.gh</a>"
    },
    faq: [
      {
        question: "What is the UCC Student Portal?",
        answer: "The UCC Student Portal is an online academic management system that provides students and faculty with centralized access to academic records, registration services, and institutional communication."
      },
      {
        question: "Who can use the Student Portal?",
        answer: "Undergraduate, postgraduate, and distance students, as well as faculty members and administrators of the University of Cape Coast."
      },
      {
        question: "What can I do on the Student Portal?",
        answer: "You can register for courses, check examination results, pay fees, view your personal profile, manage course schedules, and access important university announcements and deadlines."
      },
      {
        question: "How do I access the Student Portal?",
        answer: "Visit <a href='https://students.ucc.edu.gh' target='_blank' rel='noopener noreferrer'>https://students.ucc.edu.gh</a> and login with your student ID and password."
      },
      {
        question: "What if I forget my password?",
        answer: "Contact the UCC ICT Directorate for password reset assistance via email at <a href='mailto:ictsupport@ucc.edu.gh'>ictsupport@ucc.edu.gh</a> or by phone at <a href='tel:+233312296323'>+233 31 229 6323</a>."
      },
      {
        question: "Is the portal accessible on mobile devices?",
        answer: "Yes, the portal is accessible through both desktop and mobile browsers for ease of use across the university's diverse student population."
      },
      {
        question: "How often is the portal updated?",
        answer: "The portal is regularly updated to enhance security and functionality, reflecting the university's broader digital transformation goals."
      },
      {
        question: "Is my information secure on the portal?",
        answer: "Yes, secure login credentials and data protection measures ensure privacy and data integrity for all users."
      }
    ]
  },

// institutionalEmailActivation
institutionalEmailActivation: {
    name: "Institutional Email Activation",
    systemName: "UCC Student Email Service (Powered by Google Workspace)",
    description: "The university encourages students to make extensive use of their institutional emails especially for academic correspondence. In view of this, institutional emails have been generated for students to enable them access the university's e-learning platform. This service is provided with the help of Google.",
    role: "Institutional email serves as the official communication channel for academic correspondence and provides access to the university's e-learning platform and other institutional digital services.",
    purpose: "To provide students with a secure, university-branded email account for academic communication and access to university digital services.",
    importantNotice: "After activating the institutional email, DO NOT USE the credentials to login into the e-learning platform. The email credentials are separate from e-learning platform access.",
    prerequisites: [
      "If you have activated your institutional email previously, you are not part of this activation process.",
      "Your institutional email address and default password are provided at the top of the activation page."
    ],
    activationSteps: [
      {
        step: 1,
        title: "Start Activation",
        description: "Click <a href='https://accounts.google.com' target='_blank' rel='noopener noreferrer'>here (accounts.google.com)</a> to begin the activation process."
      },
      {
        step: 2,
        title: "Enter Email Address",
        description: "Enter your institutional email address in full and click next. Your institutional email and default password are displayed at the top of the page."
      },
      {
        step: 3,
        title: "Enter Default Password",
        description: "Enter the default password. Note that your password is different from everyone else's. Click next to continue."
      },
      {
        step: 4,
        title: "Accept Terms and Conditions",
        description: "The page displays a welcome message with Terms and Conditions of using the Institutional Email Service. Click the Accept button to continue."
      },
      {
        step: 5,
        title: "Create New Password",
        description: "Create a new password and confirm it in the input boxes provided. Note that this password change makes the default password invalid. Make sure you type a password that is strong and easy to remember. Click 'Change Password' and continue.",
        requirements: "Password should be strong and easy to remember"
      },
      {
        step: 6,
        title: "Verify Account",
        description: "The next page prompts you to verify your account. Click next to continue."
      },
      {
        step: 7,
        title: "Enter New Password",
        description: "Enter your new password to continue. Note that the password being asked here is not the default password generated for you."
      },
      {
        step: 8,
        title: "Optional Security Setup",
        description: "The following steps are optional, but it is important to do them to protect your account. If you do not want to proceed, click the CONFIRM button. Otherwise, click the UPDATE button to continue with security setup."
      },
      {
        step: 9,
        title: "Add Mobile Phone Number",
        description: "Enter your mobile phone number. Click next to continue."
      },
      {
        step: 10,
        title: "Receive Verification Code",
        description: "Click on the OK link to receive a text message from Google with your verification code."
      },
      {
        step: 11,
        title: "Verify Mobile Number",
        description: "Confirm your mobile phone number by entering the text (G-######) provided in the text message sent to your phone."
      },
      {
        step: 12,
        title: "Complete Activation",
        description: "You can skip the recovery email part by clicking Skip or continue with it. After all is done, you will see a confirmation page. Click 'Done' to finish the activation.",
        finalNote: "Make good use of your institutional emails. Good luck!"
      }
    ],
    emailFormat: {
      pattern: "student.username@stu.ucc.edu.gh",
      example: "example.username@stu.ucc.edu.gh"
    },
    defaultCredentials: {
      note: "Your institutional email address and default password are provided at the top of the activation page. Each student receives a unique default password.",
      passwordChange: "After completing the activation steps, the default password becomes invalid. You must use your newly created password for future logins."
    },
    importantReminders: [
      "If you have activated your institutional email previously, you are not part of this activation process.",
      "After activating the institutional email, DO NOT USE the credentials to login into the e-learning platform.",
      "The email credentials are separate from e-learning platform access.",
      "Save your new password in a secure place.",
      "Complete the optional security steps to better protect your account."
    ],
    services: [
      {
        service: "Institutional Email",
        description: "Official university email for academic correspondence"
      },
      {
        service: "Google Workspace Integration",
        description: "Access to Google services including Drive, Calendar, and Docs"
      },
      {
        service: "E-Learning Platform",
        description: "Access note: Email credentials are separate from e-learning platform login credentials"
      }
    ],
    troubleshooting: {
      commonIssues: [
        {
          issue: "Default password not working",
          solution: "Ensure you are entering the exact default password provided. If issues persist, contact UCC ICT Directorate for assistance."
        },
        {
          issue: "Not receiving SMS verification code",
          solution: "Check your mobile network connection and ensure you entered the correct phone number. Request the code again after a few minutes."
        },
        {
          issue: "Password reset after activation",
          solution: "If you forget your new password, you can use the 'Forgot Password' option on the Google login page or contact UCC ICT Directorate."
        }
      ],
      contact: {
        department: "UCC ICT Directorate",
        email: "<a href='mailto:ictsupport@ucc.edu.gh'>ictsupport@ucc.edu.gh</a>",
        phone: "<a href='tel:+233312296323'>+233 31 229 6323</a>"
      }
    },
    faq: [
      {
        question: "Why do I need an institutional email?",
        answer: "The university encourages students to use institutional emails for academic correspondence. It provides access to the university's e-learning platform and other digital services, and serves as your official communication channel with the university."
      },
      {
        question: "What if I already activated my email before?",
        answer: "If you have activated your institutional email previously, you are not part of this activation process. Continue using your existing email credentials."
      },
      {
        question: "Where do I find my default password?",
        answer: "Your institutional email address and default password are displayed at the top of the activation page. Each student receives a unique default password."
      },
      {
        question: "Can I use my institutional email credentials for the e-learning platform?",
        answer: "No. After activating the institutional email, DO NOT USE the credentials to login into the e-learning platform. The email credentials are separate from e-learning platform access."
      },
      {
        question: "What should I do if I forget my new password?",
        answer: "You can use the 'Forgot Password' option on the Google login page or contact the UCC ICT Directorate at <a href='mailto:ictsupport@ucc.edu.gh'>ictsupport@ucc.edu.gh</a> for assistance."
      },
      {
        question: "Is it mandatory to complete the optional security steps?",
        answer: "The security steps (adding mobile phone and recovery email) are optional but recommended to protect your account and enable account recovery if you forget your password."
      },
      {
        question: "What happens to my default password after activation?",
        answer: "After you create a new password in Step 5, the default password becomes invalid. You must use your newly created password for all future logins."
      }
    ]
  },

  // scholarshipApplication
scholarshipApplication: {
    name: "UCC Students' Financial Support Office (StuFSO) Scholarship",
    systemName: "University of Cape Coast Centralized Scholarship/Bursary Scheme",
    description: "The Students' Financial Support Office is established with the aim of providing equal educational opportunities and a sound environment free from financial tensions and emotions to brilliant/promising but needy students of the University. The Financial Support at the University is in the form of a full scholarship, partial scholarship, provision of accommodation, fee arrangements, and on-campus work-study or part-time job opportunities for students.",
    role: "To provide financial support to brilliant but needy students of the University of Cape Coast, ensuring equal educational opportunities and a supportive learning environment free from financial barriers.",
    vision: "We seek to be a leader in student financial support with a world-wide acclaim with high quality and innovative service, including an effective use of technology to facilitate both processing of applications and communicating with students and other stakeholders.",
    mission: "The Student Financial Support Office of UCC strives to be responsible stewards of all available internal and external support funds, with key focus on university education accessible to young Ghanaians through the elimination of financial barriers and creating supportive and friendly learning environment for needy-but-brilliant students of University of Cape Coast.",
    contact: {
      address: "Students' Financial Support Office, Central Administration B111, University of Cape Coast, Cape Coast, Ghana",
      phone: "<a href='tel:0362196721'>0362196721</a>",
      email: "<a href='mailto:studentfinsupport@ucc.edu.gh'>studentfinsupport@ucc.edu.gh</a>"
    },
    officeHours: "Monday-Friday: 8am to 4:00pm",
    application: {
      howToApply: [
        {
          step: 1,
          title: "Visit Application Portal",
          description: "Visit <a href='https://apply-stufso.ucc.edu.gh' target='_blank' rel='noopener noreferrer'>https://apply-stufso.ucc.edu.gh</a> to begin your application."
        },
        {
          step: 2,
          title: "Login with My UCC Account",
          description: "Use your login credentials for My UCC Account to access the application system."
        },
        {
          step: 3,
          title: "Complete Application Form",
          description: "Complete the application form and upload the necessary documents as required."
        },
        {
          step: 4,
          title: "Selection Interview",
          description: "Shortlisted applicants will be invited to a selection interview."
        }
      ],
      applicationPortal: "<a href='https://apply-stufso.ucc.edu.gh' target='_blank' rel='noopener noreferrer'>https://apply-stufso.ucc.edu.gh</a>"
    },
    eligibilityCriteria: [
      "Must be a Ghanaian by birth",
      "Be enrolled as a student of the University of Cape Coast on full-time regular programmes or any of the University's distance programmes",
      "Be able to demonstrate financial need and must be ready to supply any documentary evidence for decision making",
      "Must not be a beneficiary of another scholarship scheme",
      "Must be brilliant as determined by the University",
      "Must complete an application form by providing the right information"
    ],
    typesOfSupport: [
      "Full scholarship",
      "Partial scholarship",
      "Provision of accommodation",
      "Fee arrangements",
      "On-campus work-study opportunities",
      "Part-time job opportunities"
    ],
    coreValues: [
      {
        value: "Integrity",
        description: "We hold ourselves accountable to the highest ethical standards and ensure that all employees of the office act with integrity in all their dealings with students, colleagues, and partners."
      },
      {
        value: "Fairness",
        description: "We are committed to equitable treatment of all students, ensuring that financial aid decisions are made without bias and based solely on demonstrated need and merit."
      },
      {
        value: "Empowerment",
        description: "We provide students with knowledge, resources, and support to make informed financial decisions, and personalized guidance throughout the financial aid process."
      },
      {
        value: "Creativity",
        description: "We use innovative thinking to provide unique and effective financial aid solutions, fostering a culture of experimentation and new ideas."
      },
      {
        value: "Transparency",
        description: "We are committed to open communication, providing clear and accurate information and being open about our decision-making process for financial aid."
      }
    ],
    fundingSources: [
      "Annual budgetary allocation by Central Administration",
      "SRC contribution through SERF",
      "A percentage of JCRC Dues",
      "A percentage of DESAG Dues",
      "A percentage of GRASAG Dues",
      "Contribution from Office of the Dean of Students",
      "A percentage of Net Profit from sale of UCC Souvenir",
      "Corporate Organizations",
      "Non-governmental Organizations",
      "UCC Alumni",
      "Private Individuals"
    ],
    donationAccount: {
      name: "UCC Students Scholarship Account",
      bank: "Ghana Commercial Bank",
      accountNumber: "3021130001127",
      branch: "UCC branch",
      description: "Support needy students by contributing to the UCC Students Scholarship Account"
    },
    externalPartners: [
      {
        name: "MTN Bright Foundation",
        programs: ["MTN Bright Foundation", "MTN Bright Reloaded", "MTN Emotive Scholarship"],
        website: "<a href='https://scholarship.mtn.com.gh/' target='_blank' rel='noopener noreferrer'>https://scholarship.mtn.com.gh/</a>"
      },
      {
        name: "GNPC Scholarship",
        website: "<a href='http://gnpcfoundation.org/apply/pages/login.php' target='_blank' rel='noopener noreferrer'>http://gnpcfoundation.org/apply/pages/login.php</a>"
      },
      {
        name: "Gold Fields",
        website: "<a href='https://www.goldfields-ghana.com/programmes-and-projects.php' target='_blank' rel='noopener noreferrer'>https://www.goldfields-ghana.com/programmes-and-projects.php</a>"
      },
      {
        name: "Ghana Gas Pipeline",
        website: "<a href='https://www.ghanagas.com.gh/application/scholarship-application-form.pdf' target='_blank' rel='noopener noreferrer'>https://www.ghanagas.com.gh/application/scholarship-application-form.pdf</a>"
      },
      {
        name: "Standard Chartered - Kenneth Dadzie Trust Fund",
        website: "<a href='https://golearnershub.com/standard-chartered-kenneth-dadzie-memorial-standard-chartered-science-education-trust-funds-scholarship/' target='_blank' rel='noopener noreferrer'>https://golearnershub.com/standard-chartered-kenneth-dadzie-memorial-standard-chartered-science-education-trust-funds-scholarship/</a>"
      },
      {
        name: "Standard Chartered - Science Education Trust Fund",
        website: "<a href='http://www.uew.edu.gh' target='_blank' rel='noopener noreferrer'>http://www.uew.edu.gh</a>"
      },
      {
        name: "Kufuor Scholars Program",
        website: "<a href='https://kspregistration.com/' target='_blank' rel='noopener noreferrer'>https://kspregistration.com/</a>"
      },
      {
        name: "GETFund Scholarship Programme",
        website: "<a href='https://getfund.scholarshipsplatform.com/' target='_blank' rel='noopener noreferrer'>https://getfund.scholarshipsplatform.com/</a>"
      },
      {
        name: "Ghana Scholarships Secretariat",
        website: "<a href='https://www.scholarshipgh.com/' target='_blank' rel='noopener noreferrer'>https://www.scholarshipgh.com/</a>"
      },
      {
        name: "GEL Banana Farm Fairtrade",
        email: "<a href='mailto:Gel.fpc@gelgh.com'>Gel.fpc@gelgh.com</a>"
      },
      {
        name: "Getfund Scholarship Application",
        website: "<a href='https://getfund.scholarshipsplatform' target='_blank' rel='noopener noreferrer'>https://getfund.scholarshipsplatform</a>"
      },
      {
        name: "Camfed-Mastercard Foundation",
        website: "<a href='https://mastercardfdn.org/partners/camfed/' target='_blank' rel='noopener noreferrer'>https://mastercardfdn.org/partners/camfed/</a>"
      },
      {
        name: "VRA Scholarship to Needy but Brilliant Students",
        website: "<a href='https://www.vra.com/media/2022/VRA-Awards-Scholarships-to-61-Needy-but-Brilliant-Students.php' target='_blank' rel='noopener noreferrer'>https://www.vra.com/media/2022/VRA-Awards-Scholarships-to-61-Needy-but-Brilliant-Students.php</a>"
      }
    ],
    faq: [
      {
        question: "Who is eligible to apply for the StuFSO Scholarship?",
        answer: "To be eligible, you must be a Ghanaian by birth, enrolled as a student at UCC (full-time regular or distance programmes), demonstrate financial need, not be a beneficiary of another scholarship scheme, and meet the university's academic brilliance criteria."
      },
      {
        question: "How do I apply for the scholarship?",
        answer: "Visit <a href='https://apply-stufso.ucc.edu.gh' target='_blank' rel='noopener noreferrer'>https://apply-stufso.ucc.edu.gh</a>, login with your My UCC Account credentials, complete the application form, and upload the required documents."
      },
      {
        question: "What types of financial support are available?",
        answer: "Support includes full scholarships, partial scholarships, provision of accommodation, fee arrangements, and on-campus work-study or part-time job opportunities."
      },
      {
        question: "What happens after I submit my application?",
        answer: "Shortlisted applicants will be invited to a selection interview. Successful candidates will be notified through official university channels."
      },
      {
        question: "Can I apply if I already have another scholarship?",
        answer: "No. Applicants must not be beneficiaries of another scholarship scheme to be eligible for the StuFSO Centralized Scholarship/Bursary Scheme."
      },
      {
        question: "How is the scholarship funded?",
        answer: "Funding comes from multiple sources including Central Administration budgetary allocation, SRC contributions, JCRC and DESAG dues, GRASAG contributions, corporate organizations, NGOs, UCC Alumni, and private individuals."
      },
      {
        question: "How can I support the scholarship fund?",
        answer: "You can make a donation to the UCC Students Scholarship Account at Ghana Commercial Bank, UCC branch. Account number: 3021130001127."
      },
      {
        question: "Who do I contact for more information?",
        answer: "Contact the Students' Financial Support Office at Central Administration B111, call <a href='tel:0362196721'>0362196721</a>, or email <a href='mailto:studentfinsupport@ucc.edu.gh'>studentfinsupport@ucc.edu.gh</a>."
      },
      {
        question: "Are distance learning students eligible?",
        answer: "Yes. Students enrolled in any of the University's distance programmes are eligible to apply, provided they meet all other eligibility criteria."
      }
    ]
  },
    ///Current Admission Info
admissionscurrent: {
    cutOffPoints: {
      academicYear: "2025/2026",
      fullList: [
        { program: "B.Ed. Accounting", male: 12, female: 18 },
        { program: "B.Ed. Accounting with Management", male: 20, female: 20 },
        { program: "B.Ed. Agriculture", male: 22, female: 22 },
        { program: "B.Ed. Arts", male: 16, female: 16 },
        { program: "B.Ed. Automobile and Metal Technology", male: 18, female: 18 },
        { program: "B.Ed. Clothing and Textiles with Management in Living", male: 20, female: 20 },
        { program: "B.Ed. Communication Design", male: 15, female: 17 },
        { program: "B.Ed. Construction and Woodwork Technology", male: 18, female: 18 },
        { program: "B.Ed. Construction Technology Education", male: 19, female: 19 },
        { program: "B.Ed. Early Childhood Education", male: 19, female: 20 },
        { program: "B.Ed. Economics", male: 18, female: 18 },
        { program: "B.Ed. Electrical and Electronic Engineering", male: 19, female: 19 },
        { program: "B.Ed. English", male: 20, female: 20 },
        { program: "B.Ed. Food and Nutrition with Management in Living", male: 20, female: 20 },
        { program: "B.Ed. French", male: 19, female: 19 },
        { program: "B.Ed. Geography", male: 19, female: 19 },
        { program: "B.Ed. Ghanaian Language and Culture", male: 20, female: 20 },
        { program: "B.Ed. Government", male: 19, female: 19 },
        { program: "B.Ed. Health, Physical Education and Recreation", male: 19, female: 23 },
        { program: "B.Ed. History", male: 19, female: 19 },
        { program: "B.Ed. Home Economics", male: 18, female: 18 },
        { program: "B.Ed. Inclusive Education", male: 20, female: 23 },
        { program: "B.Ed. Information and Communication Technology", male: 18, female: 20 },
        { program: "B.Ed. Integrated Arts", male: 19, female: 19 },
        { program: "B.Ed. Junior High School Education", male: 20, female: 20 },
        { program: "B.Ed. Management", male: 18, female: 18 },
        { program: "B.Ed. Mathematics", male: 18, female: 18 },
        { program: "B.Ed. Primary Education", male: 20, female: 20 },
        { program: "B.Ed. Psychology", male: 20, female: 20 },
        { program: "B.Ed. Religious and Moral Studies", male: 20, female: 20 },
        { program: "B.Ed. Science", male: 18, female: 18 },
        { program: "B.Ed. Social Sciences", male: 16, female: 16 },
        { program: "B.Ed. Social Studies", male: 18, female: 18 },
        { program: "BA Arts", male: 18, female: 18 },
        { program: "BA Communication Studies", male: 14, female: 15 },
        { program: "BA Social Sciences", male: 18, female: 18 },
        { program: "BCom Accounting", male: 12, female: 13 },
        { program: "BCom Finance", male: 14, female: 15 },
        { program: "BCom Human Resource Management", male: 16, female: 17 },
        { program: "BCom Management", male: 17, female: 18 },
        { program: "BCom Marketing", male: 18, female: 19 },
        { program: "BCom Procurement and Supply Chain Management", male: 16, female: 17 },
        { program: "BSc Actuarial Science", male: 14, female: 15 },
        { program: "BSc Agriculture", male: 22, female: 22 },
        { program: "BSc Biochemistry", male: 14, female: 15 },
        { program: "BSc Biomedical Sciences", male: 12, female: 13 },
        { program: "BSc Computer Science", male: 14, female: 15 },
        { program: "BSc Engineering Physics", male: 18, female: 18 },
        { program: "BSc Environmental Science", male: 20, female: 20 },
        { program: "BSc Forensic Science", male: 14, female: 15 },
        { program: "BSc Information Technology", male: 15, female: 16 },
        { program: "BSc Laboratory Technology", male: 15, female: 16 },
        { program: "BSc Mathematics", male: 18, female: 18 },
        { program: "BSc Medical Laboratory Science", male: 10, female: 11 },
        { program: "BSc Nursing", male: 9, female: 10 },
        { program: "BSc Physician Assistant Studies", male: 8, female: 9 },
        { program: "BSc Psychology", male: 18, female: 18 },
        { program: "BSc Statistics", male: 18, female: 18 },
        { program: "LL.B. Law", male: 8, female: 8 },
        { program: "MB ChB Medicine and Surgery", male: 6, female: 7 },
        { program: "OD Optometry", male: 8, female: 9 },
        { program: "PharmD Pharmacy", male: 7, female: 8 }
      ]
    },
    vouchers: {
      cost: "GH¢ 220.00",
      banks: ["GCB", "ADB", "GT Bank", "Zenith", "Fidelity", "Ghana Post"],
      ussd: "*714*2161#",
      portal: "https://apply.ucc.edu.gh"
    },
    requirements: {
      general: "WASSCE (A1-C6) in 6 subjects (3 Core + 3 Electives). Max aggregate 36.",
      trackSuggestions: {
        visualArts: ["B.Ed. Arts", "B.Ed. Communication Design", "B.Ed. Clothing and Textiles", "B.Ed. Fine Art Education"],
        science: ["Medicine", "Nursing", "Computer Science", "Engineering"],
        arts: ["Law", "Social Sciences", "Communication Studies"],
        homeEconomics: ["B.Ed. Home Economics", "BSc. Hospitality"]
      }
    }
  },
  
  faqs: [
    { q: "Awaiting results?", a: "Yes, you can apply by selecting 'Awaiting Results' on the portal." },
    { q: "Admission status?", a: "Check via text or on apply.ucc.edu.gh using your name or reference number." },
    { q: "Lost ID card?", a: "Visit Student Records Section at Academic Affairs for replacement." },
    { q: "Portal password?", a: "Use 'Reset Password' on portal.ucc.edu.gh via your phone number." }
  ]

}




// ============================================
// CONVERSATION HISTORY
// ============================================
let conversationHistory = [];
const MAX_HISTORY = 10;

// ============================================
// DOM ELEMENTS
// ============================================
const chatButton = document.getElementById("chatButton");
const chatWidget = document.getElementById("chatWidget");
const closeChat = document.getElementById("closeChat");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chatMessages");

// ============================================
// EVENT LISTENERS
// ============================================
chatButton.addEventListener("click", openChat);
closeChat.addEventListener("click", closeChatWidget);
sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

// ============================================
// UI HELPERS
// ============================================
function openChat() {
  chatWidget.classList.add("active");
  chatButton.classList.add("hidden");
  chatInput.focus();
}

function closeChatWidget() {
  chatWidget.classList.remove("active");
  chatButton.classList.remove("hidden");
}

// ============================================
// RICH MESSAGE FORMATTING (from first code)
// ============================================
function formatMessage(text) {
  // Convert markdown headers
  text = text.replace(/### (.*?)(\n|$)/g, "<h3>$1</h3>");
  text = text.replace(/## (.*?)(\n|$)/g, "<h2>$1</h2>");

  // Convert bold text
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Convert markdown links [text](url)
  text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Ensure existing <a> tags open in new tab
  text = text.replace(/<a\s+(.*?)>/gi, function (match, attributes) {
    if (!attributes.includes("target=")) {
      attributes += ' target="_blank" rel="noopener noreferrer"';
    }
    return `<a ${attributes}>`;
  });

  // Convert plain URLs to clickable links
  text = text.replace(/(https?:\/\/[^\s<]+)(?![^<]*>)/g, function (url) {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });

  // Convert www. URLs without http://
  text = text.replace(/(www\.[^\s<]+)(?![^<]*>)/g, function (url) {
    return `<a href="http://${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });

  // Convert email addresses
  text = text.replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(?![^<]*>)/g, function (email) {
    return `<a href="mailto:${email}">${email}</a>`;
  });

  // Convert phone numbers (Ghanaian format)
  text = text.replace(/(?:\+233|0)[0-9]{9,10}(?![^<]*>)/g, function (phone) {
    return `<a href="tel:${phone.replace(/\s/g, "")}">${phone}</a>`;
  });

  // Convert bullet points
  text = text.replace(/^- (.*?)$/gm, "<li>$1</li>");
  text = text.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>");

  // Convert line breaks
  text = text.replace(/\n/g, "<br>");

  return text;
}

// ============================================
// ADD MESSAGE TO UI (NO HISTORY SIDE EFFECT)
// ============================================
function addMessage(message, isUser = false) {
  const messageDiv = document.createElement("div");
  messageDiv.className = isUser ? "user-message" : "bot-message";
  const messagePara = document.createElement("div");

  if (isUser) {
    messagePara.textContent = message;
  } else {
    messagePara.innerHTML = formatMessage(message);
  }

  messageDiv.appendChild(messagePara);
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ============================================
// TYPING INDICATOR
// ============================================
function showTypingIndicator() {
  const typingDiv = document.createElement("div");
  typingDiv.className = "bot-message typing-indicator";  // add the class
  typingDiv.id = "typingIndicator";
  typingDiv.innerHTML = "<span></span><span></span><span></span>";
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
  const typingIndicator = document.getElementById("typingIndicator");
  if (typingIndicator) typingIndicator.remove();
}

// ============================================
// CONVERSATION HISTORY HELPERS
// ============================================
function addToHistory(role, content) {
  conversationHistory.push({ role, content });
  if (conversationHistory.length > MAX_HISTORY) {
    conversationHistory.shift();
  }
}

// ============================================
// SEND MESSAGE WITH STREAMING + HISTORY
// ============================================
async function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  // Add user message to UI and history
  addMessage(message, true);
  addToHistory("user", message);
  chatInput.value = "";

  // Disable input while processing
  chatInput.disabled = true;
  sendBtn.disabled = true;

  // Show typing indicator
  showTypingIndicator();

  try {
    // Build messages array with system prompt + conversation history
    const apiMessages = [
      {
        role: "system",
        content: `You are a helpful virtual assistant for the University of Cape Coast in Ghana.
                    
Your job is to answer questions about admissions, programs, departments, and general information about the university.

Use ONLY the following data to answer questions. If the information is not in this data, politely say you don't have that information.

UNIVERSITY DATA:
${JSON.stringify(schoolData, null, 2)}

RESPONSE GUIDELINES:
1. Be friendly and professional
2. Keep responses SHORT (2–3 sentences max for general questions)
3. Write naturally as if talking to a person, not reading code or data
4. Never use brackets [ ] or curly braces { } in your responses
5. When listing programs, use natural language: *Example: "We offer BSc Information Technology, BSc Entomology and Wildlife, and more"*
6. Use bullet points sparingly, only when listing specific items requested
7. Avoid overloading with links – only provide links when explicitly requested or essential.
8. Only answer from provided data – never invent information.
9. Cite sources when possible (e.g., *"According to Section 3…"*)
10. Maintain contextual accuracy – avoid extrapolating beyond what is stated.
11. Handle ambiguity gracefully – if data is unclear, acknowledge it.
12. Stay consistent across different phrasings of the same question.
13. When you exhaust all data for a question, do not suggest anything afterwards.
14. Identify user type (prospective student, current student, alumni, staff) and tailor responses.
15. Distinguish between prospective vs. current student needs.
16. Direct alumni to relevant services.
17. Provide staff with administrative clarity.
18. Use gentle redirection when appropriate.
19. Never assume prior knowledge – explain acronyms first time.
20. If asked about a programme offered, reply with only the programme(s). Do not add department, links, etc.
21. Only if asked for more information, provide program website, department, and contact details.
22. For program inquiries, give direct yes/no first, then list related programs.
23. Admissions for international students: use internationalStudents data, keep short.
24. Respect academic calendar context – prioritize upcoming dates.
25. Look for keywords in query for efficient search.
26. Know when to escalate – sensitive issues: direct to appropriate office.
27. Handle misspellings gracefully – infer intended term, never correct user explicitly.
28. For ambiguous misspellings, ask: "Did you mean X?"
29. Do not correct user's spelling explicitly.
30. Match misspelled program names to closest term in data.
31. Ignore minor typos – focus on root word.
32. For "how many" questions, respond with just the number.
33. If user only asks "how many", state the total number only.
34. Provide breakdown only if explicitly asked.
35. If exact number not in data, state clearly.
36. When multiple numbers exist, choose best match based on context.
37. For counts of programs/departments, list number first, then brief breakdown if relevant.
38. If "how many" is vague, clarify before answering.
39. Never round numbers – present exactly as in data.
40. For comparative "how many", present both numbers clearly.
41. For general questions, keep to 2–3 sentences.
42. For longer responses, break into scannable sections.
43. State most important information first.
44. If response would exceed ~5-7 sentences, offer to provide in parts.
45. Never use lengthy introductions for long responses.
46. For multi-part questions, answer each part separately.
47. If question too broad, guide user to be more specific.
48. Extract only the portion that directly answers the question.
49. Prioritize user's specific intent over completeness.
50. Summarize in 1-3 sentences unless user wants more detail.
51. For specific questions (e.g., "what is the deadline?"), pull only that detail.
52. For broad questions, give brief overview then offer more details.
53. Never assume user wants full data – act as a filter.
54. Provide follow-up specifics only when requested.
55. Ask yourself: "Does this directly answer the query?" If not, leave it out.
56. If prospective student asks about programs after you've responded, direct them to full catalogue: "You can visit <a href=\"https://admissions.ucc.edu.gh/catalogue\">admissions.ucc.edu.gh/catalogue</a> to explore all programs we offer."

COVER PAGE FORMAT for requested programmes (depending on the School/Faculty):
University of Cape Coast
College: [Name]
School: [Name]
Department: [Name]
School Crest: [Image]
Course code: [Insert Code]
Course Title: [Program Name]
Index Number: [Insert Number]
Level: [Insert Level]
Lecturer's name: [Insert Name]

For other data (SchoolInformation, src, hallsofresidence, admissions etc.) use query keywords to generate response.

EXAMPLES OF GOOD RESPONSES:
- "We offer BSc Information Technology, BSc Computer Science, and PhD programs through the Department of Computer Science and Information Technology."
- "You can visit [programme website] or contact the department at dcsit@ucc.edu.gh for more details."
- "The Department of Agricultural Economics and Extension offers BSc Agribusiness and BSc Agricultural Extension programs."`
      },
      ...conversationHistory  // include previous messages
    ];

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 1500,
        stream: true
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      if (response.status === 429) {
        throw new Error("Rate limit exceeded. Please check your OpenAI billing or wait a moment.");
      } else if (response.status === 401) {
        throw new Error("Invalid API key. Please check your OpenAI API key in the backend .env file");
      } else if (response.status === 403) {
        throw new Error("API key doesn't have permission. Please check your OpenAI account settings.");
      } else {
        throw new Error(`API Error (${response.status}): ${errorData.error?.message || "Unknown error"}`);
      }
    }

    // Remove typing indicator
    removeTypingIndicator();

    // Create a new bot message bubble for streaming
    const botMessageDiv = document.createElement("div");
    botMessageDiv.className = "bot-message";
    const botMessagePara = document.createElement("div");
    botMessageDiv.appendChild(botMessagePara);
    chatMessages.appendChild(botMessageDiv);

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullResponse = "";
    let buffer = "";  // Buffer for partial JSON chunks

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      buffer += chunk;

      const lines = buffer.split("\n");
      buffer = lines.pop(); // keep last partial line

      for (const line of lines) {
        const trimmedLine = line.trim();
        if (!trimmedLine || trimmedLine === "data: [DONE]") continue;

        if (trimmedLine.startsWith("data: ")) {
          const dataStr = trimmedLine.replace("data: ", "");
          try {
            const json = JSON.parse(dataStr);
            const content = json.choices?.[0]?.delta?.content || "";
            if (content) {
              fullResponse += content;
              botMessagePara.innerHTML = formatMessage(fullResponse);
              chatMessages.scrollTop = chatMessages.scrollHeight;
            }
          } catch (e) {
            // If parsing fails, put this line back into buffer
            buffer = line + "\n" + buffer;
          }
        }
      }
    }

    // Add assistant response to conversation history
    addToHistory("assistant", fullResponse);

  } catch (error) {
    removeTypingIndicator();
    addMessage(error.message, false);
    console.error(error);
  } finally {
    // Re-enable input
    chatInput.disabled = false;
    sendBtn.disabled = false;
    chatInput.focus();
  }
}




