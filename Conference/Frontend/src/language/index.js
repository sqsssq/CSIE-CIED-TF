import {
    createI18n
} from "vue-i18n";

export default createI18n({
    legacy: false,
    globalInjection: true,
    silentFallbackWarn: true,
    silentTranslationWarn: true,
    locale: localStorage.getItem('lang') || "en-us",
    fallbackLocale: "en-us",
    messages: {
        "en-us": {
            language: "en",
            title: "2023 Annual International Conference for Chinese Scholars in Industrial Engineering (CSIE2023) \& 13th Forum for Council of Industrial Engineering and Logistics Management Department Heads (CIEDH2023)",
            about_01_title: "01 ABOUT CSIE AND CIEDH",
            about_01: [
                "The CSIE 2023 and the 13th CIEDH will be held on August 10-12, 2023 in Guangzhou, China. The conference was hosted by the Industrial Engineering Institution of Chinese Mechanical Engineering Society and organized by the Guangzhou Campus of the Hong Kong University of Science and Technology. Professor Fugee TSUNG served as the organizer, and co-chairs with Professor  Guoquan HUANG and Professor Zhen HE.",
                "The theme of the conference is 'Industry Engineering Foundation Leads the Transformation of Digital Intelligence'. CSIE is a major forum for global Chinese scholars to exchange the latest research results. It is an influential international conference in the field of industrial engineering and logistics management. The CIEDH 2023 aims to gather experts in related fields from all over the world to explore new opportdepartmenties and challenges in the field of industrial engineering driven by digital intelligence, to promote academic exchanges and discipline construction of Chinese industrial engineering, and further promote the in-depth interactive development of industrial engineering of the Guangdong-Hong Kong-Macao Greater Bay Area."
            ],
            topics_02_title: "02 THEME AND TOPICS",
            topic_02: {
                CSIE2023: {
                    title: "CSIE 2023",
                    themeTitle: "Theme:",
                    theme: "Industry Engineering Foundation Leads the Transformation of Digital Intelligence",
                    notice: "Main topics (including but not limited to):",
                    topic: [
                        "Big Data Analysis and Decision Making",
                        "Artificial Intelligence Technology",
                        "Blockchain and Digital Intelligence",
                        "Operations Research",
                        "Applied Statistics and Probability",
                        "Decision Science and Technology",
                        "Global Manufacturing Management",
                        "Facility Planning and Management",
                        "Digital Twin",
                        "Human Factors Engineering",
                        "Industry 4.0",
                        "Production Planning and Control",
                        "Quality Control and Management",
                        "Reliability and Maintenance Engineering",
                        "Digital Economy",
                        "Healthcare Engineering",
                        "Digital and Intelligent Anti - epidemic",
                        "Safety and Risk Management",
                        "The New Technology of Industrial Engineering and Its Application",
                        "Virtual Reality, Augmented Reality, and Mixed Reality",
                        "System Modeling and Simulation",
                        "Transport and Logistics Engineering",
                        "Supply Chain Management",
                        "Large Complex System",
                        "Energy and Environmental Systems Engineering",
                        "Emergency Management",
                        "Engineering Technology Management",
                        "Engineering Economics and Cost Analysis",
                        "Project Management"
                    ]
                },
                CIEDH2023: {
                    title: "CIEDH 2023",
                    notice: "Main topics:",
                    topic: [
                        "First-class Discipline Construction",
                        "New Engineering Education",
                        "Industry-education-research Integration",
                        "Internships and Practical Education"
                    ]
                }
            },
            chairmen_03_title: "03 CHAIRMEN",
            chairmen_03: {
                title: ["Co-Chairs", "Honorary Co-Chairs"],
                CoChair: [{
                        name: "Fugee Tsung",
                        department: "Hong Kong University of Science and Technology"
                    },
                    {
                        name: "Guoquan Huang",
                        department: "The University of Hong Kong"
                    },
                    {
                        name: "Zhen He",
                        department: "Tianjin University"
                    }
                ],
                "HonoraryCoChair": [{
                        name: "Shanlin Yang",
                        department: "Hefei University of Technology"
                    },
                    {
                        name: "Ershi Qi",
                        department: "Tianjin University"
                    },
                    {
                        name: "Xin Chen",
                        department: "Guangdong University of Technology"
                    },
                    {
                        name: "Zhenfu Jian",
                        department: "National Tsing Hua University, Taiwan"
                    },
                    {
                        name: "Shukai Fan",
                        department: "National Taipei University of Technology"
                    }
                ]
            },
            keynote_04_title: "04 KEYNOTE SPEAKERS",
            keynote_04: [{
                    name: "Prof. Jianjun Shi",
                    department: ["The member of National Academy of Engineering of the USA"],
                    info: ""
                },
                {
                    name: "Prof. Xin Chen",
                    department: ["Former President and Secretary of the Party Committee of Guangdong University of Technology", "Executive Director of China Mechanical Engineering Society"],
                    info: ""
                },
                {
                    name: "Shaobin Li",
                    department: ["Vice President of Gree Electric Appliances Inc. of Zhuhai, in charge of informatization and industry chain"],
                    info: ""
                },
                {
                    name: "Yigui Lin",
                    department: ["Chair Professor of National Yang Ming Chiao Tung University", "Convener of Taiwan Industrial Engineering and Management Program"],
                    info: ""
                }
            ],
            programCommittee_05_title: "05 PROGRAM COMMITTEE",
            programCommittee_05: {
                title: ["Chairmen", "Members"],
                Chairmen: [{
                        name: "Congdong Li ",
                        department: "Jinan University"
                    },
                    {
                        name: "Runliang Dou ",
                        department: "Tianjin University"
                    },
                    {
                        name: "Xiaowen Fu",
                        department: "The Hong Kong Polytechnic University"
                    }
                ],
                Members: [{
                        name: "Ben Niu",
                        department: "Shenzhen University"
                    },
                    {
                        name: "Jinwen Ou",
                        department: "Jinan University"
                    },
                    {
                        name: "Depeng Zhang",
                        department: "Guangdong University of Technology"
                    },
                    {
                        name: "Hongfei Guo",
                        department: "Jinan University"
                    },
                    {
                        name: "Mingxing Li",
                        department: "Jinan University"
                    },
                    {
                        name: "Lianjie Shu",
                        department: "University of Macau"
                    }
                ],
            },
            organizationCommittee_05: {
                title: ["Organization Committee", "Chairmen", "Members"],
                Chairmen: [{
                        name: "Ting Qu",
                        department: "Jinan University"
                    },
                    {
                        name: "Hao Luo",
                        department: "Shenzhen University"
                    },
                    {
                        name: "Juan Du",
                        department: "The Hong Kong University of Science and Technology (Guangzhou)"
                    },
                    {
                        name: "Ni Sheng",
                        department: "Macau University of Science and Technology"
                    }
                ],
                Members: [{
                        name: "Mian Yan",
                        department: "Jinan University"
                    },
                    {
                        name: "Huajun Tang",
                        department: "Macau University of Science and Technology"
                    },
                    {
                        name: "Xiaode Zuo ",
                        department: "Jinan University"
                    },
                    {
                        name: "Jianjun Liu",
                        department: "Guangdong University of Technology"
                    },
                    {
                        name: "Xiude Chen",
                        department: "Guangdong University of Technology"
                    },
                    {
                        name: "Changwei Hu",
                        department: "Guangdong University of Technology"
                    }
                ],
            },
            awardCommittee_06_title: "06 AWARD COMMITTEE",
            awardCommittee_06: {
                title: "Chairmen",
                Chairmen: [{
                        name: "Wenhui Zhou",
                        department: "South China University of Technology"
                    },
                    {
                        name: "Qiang Liu",
                        department: "Guangdong University of Technology"
                    },
                    {
                        name: "Jiheng Zhang",
                        department: "The Hong Kong University of Science and Technology"
                    }
                ]
            },
            publicationCommittee_07_title: "07 PUBLICATION COMMITTEE",
            publicationCommittee_07: {
                title: "Chairmen",
                Chairmen: [{
                        name: "Fu Hui",
                        department: "Guangdong University of Technology"
                    },
                    {
                        name: "Chan King Cheong",
                        department: "The Hong Kong Polytechnic University"
                    }
                ]
            },
            societies_08_title: "08 PERSONS IN CHARGE OF THE CO-ORGANIZERS (SOCIETIES)",
            societies_08: [{
                    name: "Zhaofang Mao",
                    department: ["Industrial Engineering and Management Branch, Society of Management Science and Engineering of China"]
                },
                {
                    name: "Hui Fu",
                    department: ["Industrial Engineering Branch of Guangdong Mechanical Engineering Society"]
                },
                {
                    name: "Ting Qu, Hongfei Guo, Hongfei Guo, Mian Yan ",
                    department: ["Logistics Engineering Branch of Guangdong Mechanical Engineering Society"]
                },
                {
                    name: "Depeng Zhang,Xiude Chen ",
                    department: ["Guangdong System Engineering Society"]
                },
                {
                    name: "Ting Qu, Xiaode Zuo",
                    department: ["Guangdong University Value Engineering Research Association"]
                }
            ],
            internationalAdvisoryCommittee_09_title: "09 INTERNATIONAL ADVISORY COMMITTEE",
            internationalAdvisoryCommittee_09: [{
                    name: "Anthony Shun Fung Chiu",
                    department: "De La Salle University"
                },
                {
                    name: "Benjamin Yen",
                    department: "University of Hong Kong"
                },
                {
                    name: "Bernard Jiang",
                    department: "Taiwan University of Science and Technology"
                },
                {
                    name: "Chen-Fu Chien",
                    department: "Taiwan Tsing Hua University"
                },
                {
                    name: "Ching-Jung Ting",
                    department: "Yuan Ze University"
                },
                {
                    name: "David M.C. Wu",
                    department: "Taiwan Chiao Tung University"
                },
                {
                    name: "Du-Ming Tsai",
                    department: "Yuan Ze University"
                },
                {
                    name: "Guo Quan (George) Huang",
                    department: "University of Hong Kong"
                },
                {
                    name: "HoThanh Phong",
                    department: "International University"
                },
                {
                    name: "Ilkyeong Moon ",
                    department: "Seoul National University"
                },
                {
                    name: "James T. Lin",
                    department: "Taiwan Tsing Hua University"
                },
                {
                    name: "Jiafu Tang",
                    department: "Dongbei University of Finance and Economics"
                },
                {
                    name: "Jie Song",
                    department: "Peking University"
                },
                {
                    name: "Jin Peng",
                    department: "Tsinghua University"
                },
                {
                    name: "Jingshan Li ",
                    department: "Tsinghua University"
                },
                {
                    name: "Jinwu Gao",
                    department: "Renmin University of China"
                },
                {
                    name: "Kanchana Sethanan",
                    department: "Khon Kaen University"
                },
                {
                    name: "KapHwan Kim",
                    department: "Pusan National University"
                },
                {
                    name: "Katsuhiko Takahashi",
                    department: "Hiroshima University"
                },
                {
                    name: "Kenichi Nakashima",
                    department: "Kanagawa University"
                },
                {
                    name: "Kuo-Ming Wang",
                    department: "Yuan Ze University"
                },
                {
                    name: "Kwang-Jae Kim",
                    department: "Pohang University of Science and Technology"
                },
                {
                    name: "Leyuan Shi",
                    department: "University of Wisconsin - Madison"
                },
                {
                    name: "Li Zheng",
                    department: "Tsinghua University"
                },
                {
                    name: "Loon Ching Tang",
                    department: "National University of Singapore"
                },
                {
                    name: "Shanlin Yang",
                    department: "Hefei University of Technology"
                },
                {
                    name: "Shu-Kai. Fan",
                    department: "Taipei University of Technology"
                },
                {
                    name: "Stein W. Wallace",
                    department: "Norwegian School of Economics"
                },
                {
                    name: "Tae-Eog Lee",
                    department: "Korea Advanced Institute of Science and Technology"
                },
                {
                    name: "Takashi Irohara",
                    department: "Sophia University"
                },
                {
                    name: "TN Goh",
                    department: "National University of Singapore"
                },
                {
                    name: "Voratas Kachitvichyanukul",
                    department: "Asian Institute of Technology"
                },
                {
                    name: "Xiaofen Tang",
                    department: "Shanghai Association for Quality"
                },
                {
                    name: "Yasutaka Kainuma",
                    department: "Tokyo Metropolitan University"
                },
                {
                    name: "Yi-Kuei Lin",
                    department: "Taiwan University of Science and Technology"
                },
                {
                    name: "Yiming Wei",
                    department: "Beijing Institute of Technology"
                },
                {
                    name: "Yon-Chun Chou",
                    department: "Taiwan University"
                },
                {
                    name: "Zhe George Zhang",
                    department: "Western Washington University"
                },
                {
                    name: "Zhen He",
                    department: "Tianjin University"
                },
                {
                    name: "Zhibin Jiang",
                    department: "Shanghai Jiao Tong University"
                }
            ],
            institutions_10_title: "10 INSTITUTIONS",
            institutions_10: {
                title: ["Host", "Organizer", "Co-organizers"],
                Host: [{
                    name: "Industrial Engineering Institution of Chinese Mechanical Engineering Society",
                    imgPath: ""
                }, {
                    name: "Chinese Industrial Engineering Department Heads",
                    imgPath: ""
                }],
                Organizer: {
                    name: "Information Hub of the Hong Kong University of Science and Technology",
                    imgPath: ""
                },
                CoOrganizer: [{
                        name: "Jinan University",
                        imgPath: ""
                    },
                    {
                        name: "Shenzhen University",
                        imgPath: ""
                    },
                    {
                        name: "Guangdong University of Technology",
                        imgPath: ""
                    },
                    {
                        name: "Society of Management Science and Engineering of China",
                        imgPath: ""
                    },
                    {
                        name: "Industrial Engineering Branch/Logistics Engineering Branch of Guangdong Mechanical Engineering Society",
                        imgPath: ""
                    },
                    {
                        name: "Guangdong System Engineering Society",
                        imgPath: ""
                    },
                    {
                        name: "Guangdong University Value Engineering Research Association",
                        imgPath: ""
                    }
                ]
            }
        },

        "zh-cn": {
            language: "zh",
            title: "2023华人学者工业工程国际年会暨全球华人工业工程与物流管理院长系主任联席会",
            about_01_title: "01 会议简介",
            about_01: [
                "2023年华人学者工业工程国际年会（CSIE2023）暨第十三届全球华人工业工程与物流管理院长系主任联席会(CIEDH2023)将于2023年8月10日到12日在香港科技大学广州校区举办。本次会议由中国机械工程学会工业工程分会主办，香港科技大学（广州）承办。宗福季教授担任本次会议主理人,并与黄国全教授、何桢教授共同担任联席主席。",
                "大会主题为“工业工程筑基引领数智化转型”。华人学者工业工程国际年会（CSIE2023）是全球华人学者交流工业工程相关最新研究成果的一个主要论坛，这是一个在工业工程及物流管理领域深具影响力的国际会议。第十三届全球华人工业工程与物流管理院长系主任联席会（CIEDH2023）旨在荟聚世界各地相关领域的专家、学者及从业人员，共同探寻数智化驱动下工业工程领域面临的新机遇与新挑战，发现工业工程人才的新需求，传播新的经验和技术，促进我国工业工程学科的学术交流和学科建设，进一步推动大湾区一体化下工业工程的产学研深度互动发展。"
            ],
            topics_02_title:"02 会议主题",
            topic_02: {
                CSIE2023: {
                    title: "2023年华人学者工业工程国际年会",
                    
                    themeTitle: "主题:",
                    theme: "工业工程筑基引领数智化转型",
                    notice: "主要议题包括但不限于：",
                    topic: [
                        "大数据分析与决策",
                        "人工智能技术及应用",
                        "区块链与数智化管理",
                        "运筹学",
                        "应用统计和概率",
                        "决策科学与技术",
                        "全球制造与管理",
                        "设施规划与管理",
                        "数字孪生",
                        "人因工程",
                        "工业4.0",
                        "生产计划与控制",
                        "质量控制和管理",
                        "可靠性和维护工程",
                        "工业工程的数字经济",
                        "医疗保健工程与管理",
                        "数智化抗疫",
                        "安全与风险管理",
                        "工业工程新技术及其应用",
                        "虚拟现实、增强现实与混合现实",
                        "系统建模与仿真",
                        "运输和物流工程",
                        "供应链管理",
                        "大型复杂系统",
                        "能源与环境系统工程",
                        "应急管理",
                        "工程技术管理",
                        "工程经济与成本分析",
                        "项目管理"
                    ]
                },
                CIEDH2023: {
                    title: "第十三届全球华人工业工程与物流管理院长系主任联席会",
                    notice: "主要议题：",
                    topic: [
                        "一流专业建设",
                        "新工科教育",
                        "产教研融合",
                        "实习与实践教育"
                    ]
                }
            },
            chairmen_03_title: "03 会议主席",
            chairmen_03: {
                title: ["联席主席", "荣誉联席主席"],
                CoChair: [{
                        name: "宗福季",
                        department: "香港科技大学"
                    },
                    {
                        name: "黄国全",
                        department: "香港大学"
                    },
                    {
                        name: "何桢",
                        department: "天津大学"
                    }
                ],
                HonoraryCoChair: [{
                        name: "杨善林",
                        department: "合肥工业大学"
                    },
                    {
                        name: "齐二石",
                        department: "天津大学"
                    },
                    {
                        name: "陈新",
                        department: "广东工业大学"
                    },
                    {
                        name: "简祯富",
                        department: "台湾清华大学"
                    },
                    {
                        name: "范书凯",
                        department: "台北科技大学"
                    }
                ]
            },
            keynote_04_title: "04 大会报告",
            keynote_04: [{
                    name: "史建军",
                    department: ["美国国家工程院院士"],
                    info: ""
                },
                {
                    name: "陈新",
                    department: ["广东工业大学前任校长和党委书记", "中国机械工程学会常务理事"],
                    info: ""
                },
                {
                    name: "李绍斌",
                    department: ["格力副总裁, 负责信息化和产业链"],
                    info: ""
                },
                {
                    name: "林义贵",
                    department: ["阳明交通大学讲座教授", "台湾国科会工业工程与管理学门召集人"],
                    info: ""
                }
            ],
            programCommittee_05_title: "05 程序委员会",
            programCommittee_05: {
                title: ["主席", "成员"],
                Chairmen: [{
                        name: "李从东",
                        department: "暨南大学"
                    },
                    {
                        name: "窦润亮",
                        department: "天津大学"
                    },
                    {
                        name: "符啸文",
                        department: "香港理工大学"
                    }
                ],
                Members: [{
                        name: "牛奔",
                        department: "深圳大学"
                    },
                    {
                        name: "欧锦文",
                        department: "暨南大学"
                    },
                    {
                        name: "张德鹏",
                        department: "广东工业大学"
                    },
                    {
                        name: "郭洪飞",
                        department: "暨南大学"
                    },
                    {
                        name: "李明星",
                        department: "暨南大学"
                    },
                    {
                        name: "舒连杰",
                        department: "澳门大学"
                    }
                ],
            },
            organizationCommittee_05: {
                title: ["组织委员会", "主席", "成员"],
                Chairmen: [{
                        name: "屈挺",
                        department: "暨南大学"
                    },
                    {
                        name: "罗浩",
                        department: "深圳大学"
                    },
                    {
                        name: "杜娟",
                        department: "港科技大学（广州）"
                    },
                    {
                        name: "盛妮",
                        department: "澳门科技大学"
                    }
                ],
                Members: [{
                        name: "闫勉",
                        department: "暨南大学"
                    },
                    {
                        name: "唐华军",
                        department: "澳门科技大学"
                    },
                    {
                        name: "左小德",
                        department: "暨南大学"
                    },
                    {
                        name: "刘建军",
                        department: "广东工业大学"
                    },
                    {
                        name: "陈修德",
                        department: "广东工业大学"
                    },
                    {
                        name: "胡常伟",
                        department: "广东工业大学"
                    }
                ],
            },
            awardCommittee_06_title: "06 奖励委员会",
            awardCommittee_06: {
                title: "主席",
                Chairmen: [{
                        name: "周文慧",
                        department: "华南理工大学"
                    },
                    {
                        name: "刘强",
                        department: "广东工业大学"
                    },
                    {
                        name: "张季恒",
                        department: "香港科技大学"
                    }
                ]
            },
            publicationCommittee_07_title: "07 出版委员会",
            publicationCommittee_07: {
                title: "主席",
                Chairmen: [{
                        name: "傅惠",
                        department: "广东工业大学"
                    },
                    {
                        name: "陈镜昌",
                        department: "香港理工大学"
                    }
                ]
            },
            societies_08_title: "08 各协办单位（学会）负责人",
            societies_08: [{
                    name: "毛照昉",
                    department: ["管理科学与工程学会工业工程与管理分会"]
                },
                {
                    name: "傅惠",
                    department: ["广东省机械工程学会 工业工程分会"]
                },
                {
                    name: "屈挺、郭洪飞、闫勉",
                    department: ["广东省机械工程学会 物流工程分会 "]
                },
                {
                    name: "张德鹏、陈修德",
                    department: ["广东省系统工程学会 "]
                },
                {
                    name: "屈挺，左小德",
                    department: ["广东省高校价值工程研究会"]
                }
            ],
            internationalAdvisoryCommittee_09_title: "09 国际咨询委员会",
            internationalAdvisoryCommittee_09: [{
                    name: "Anthony Shun Fung Chiu",
                    department: "De La Salle University"
                },
                {
                    name: "Benjamin Yen",
                    department: "University of Hong Kong"
                },
                {
                    name: "Bernard Jiang",
                    department: "Taiwan University of Science and Technology"
                },
                {
                    name: "Chen-Fu Chien",
                    department: "Taiwan Tsing Hua University"
                },
                {
                    name: "Ching-Jung Ting",
                    department: "Yuan Ze University"
                },
                {
                    name: "David M.C. Wu",
                    department: "Taiwan Chiao Tung University"
                },
                {
                    name: "Du-Ming Tsai",
                    department: "Yuan Ze University"
                },
                {
                    name: "Guo Quan (George) Huang",
                    department: "University of Hong Kong"
                },
                {
                    name: "HoThanh Phong",
                    department: "International University"
                },
                {
                    name: "Ilkyeong Moon ",
                    department: "Seoul National University"
                },
                {
                    name: "James T. Lin",
                    department: "Taiwan Tsing Hua University"
                },
                {
                    name: "Jiafu Tang",
                    department: "Dongbei University of Finance and Economics"
                },
                {
                    name: "Jie Song",
                    department: "Peking University"
                },
                {
                    name: "Jin Peng",
                    department: "Tsinghua University"
                },
                {
                    name: "Jingshan Li ",
                    department: "Tsinghua University"
                },
                {
                    name: "Jinwu Gao",
                    department: "Renmin University of China"
                },
                {
                    name: "Kanchana Sethanan",
                    department: "Khon Kaen University"
                },
                {
                    name: "KapHwan Kim",
                    department: "Pusan National University"
                },
                {
                    name: "Katsuhiko Takahashi",
                    department: "Hiroshima University"
                },
                {
                    name: "Kenichi Nakashima",
                    department: "Kanagawa University"
                },
                {
                    name: "Kuo-Ming Wang",
                    department: "Yuan Ze University"
                },
                {
                    name: "Kwang-Jae Kim",
                    department: "Pohang University of Science and Technology"
                },
                {
                    name: "Leyuan Shi",
                    department: "University of Wisconsin - Madison"
                },
                {
                    name: "Li Zheng",
                    department: "Tsinghua University"
                },
                {
                    name: "Loon Ching Tang",
                    department: "National University of Singapore"
                },
                {
                    name: "Shanlin Yang",
                    department: "Hefei University of Technology"
                },
                {
                    name: "Shu-Kai. Fan",
                    department: "Taipei University of Technology"
                },
                {
                    name: "Stein W. Wallace",
                    department: "Norwegian School of Economics"
                },
                {
                    name: "Tae-Eog Lee",
                    department: "Korea Advanced Institute of Science and Technology"
                },
                {
                    name: "Takashi Irohara",
                    department: "Sophia University"
                },
                {
                    name: "TN Goh",
                    department: "National University of Singapore"
                },
                {
                    name: "Voratas Kachitvichyanukul",
                    department: "Asian Institute of Technology"
                },
                {
                    name: "Xiaofen Tang",
                    department: "Shanghai Association for Quality"
                },
                {
                    name: "Yasutaka Kainuma",
                    department: "Tokyo Metropolitan University"
                },
                {
                    name: "Yi-Kuei Lin",
                    department: "Taiwan University of Science and Technology"
                },
                {
                    name: "Yiming Wei",
                    department: "Beijing Institute of Technology"
                },
                {
                    name: "Yon-Chun Chou",
                    department: "Taiwan University"
                },
                {
                    name: "Zhe George Zhang",
                    department: "Western Washington University"
                },
                {
                    name: "Zhen He",
                    department: "Tianjin University"
                },
                {
                    name: "Zhibin Jiang",
                    department: "Shanghai Jiao Tong University"
                }
            ],
            institutions_10_title: "10 举办单位",
            institutions_10: {
                title: ["主办单位", "承办单位", "协办单位"],
                Host: [{
                    name: "中国机械工程学会工业工程分会",
                    imgPath: ""
                }, {
                    name: "大中华区工业工程系所主管联合会",
                    imgPath: ""
                }],
                Organizer: {
                    name: "香港科技大学的信息枢纽",
                    imgPath: ""
                },
                CoOrganizer: [{
                        name: "暨南大学",
                        imgPath: ""
                    },
                    {
                        name: "深圳大学",
                        imgPath: ""
                    },
                    {
                        name: "广东工业大学",
                        imgPath: ""
                    },
                    {
                        name: "管理科学与工程学会工业工程与管理分会",
                        imgPath: ""
                    },
                    {
                        name: "广东省机械工程学会工业工程分会/物流工程分会",
                        imgPath: ""
                    },
                    {
                        name: "广东省系统工程学会",
                        imgPath: ""
                    },
                    {
                        name: "广东省高校价值工程研究会",
                        imgPath: ""
                    }
                ]
            }
        }
    }
});