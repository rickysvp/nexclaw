(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/landingpage/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// i18n translations for ClawWallet Landing Page
// Supported languages: zh, en, ja, ko, fr, de, es
__turbopack_context__.s([
    "getTranslation",
    ()=>getTranslation,
    "languages",
    ()=>languages,
    "translations",
    ()=>translations
]);
const languages = [
    {
        code: 'zh',
        label: '中文',
        flag: '🇨🇳'
    },
    {
        code: 'en',
        label: 'English',
        flag: '🇺🇸'
    },
    {
        code: 'ja',
        label: '日本語',
        flag: '🇯🇵'
    },
    {
        code: 'ko',
        label: '한국어',
        flag: '🇰🇷'
    },
    {
        code: 'fr',
        label: 'Français',
        flag: '🇫🇷'
    },
    {
        code: 'de',
        label: 'Deutsch',
        flag: '🇩🇪'
    },
    {
        code: 'es',
        label: 'Español',
        flag: '🇪🇸'
    }
];
const translations = {
    // Navigation
    nav: {
        features: {
            zh: '特性',
            en: 'Features',
            ja: '機能',
            ko: '기능',
            fr: 'Fonctionnalités',
            de: 'Funktionen',
            es: 'Características'
        },
        security: {
            zh: '安全',
            en: 'Security',
            ja: 'セキュリティ',
            ko: '보안',
            fr: 'Sécurité',
            de: 'Sicherheit',
            es: 'Seguridad'
        },
        reviews: {
            zh: '用户反馈',
            en: 'Reviews',
            ja: 'ユーザーレビュー',
            ko: '사용자 리뷰',
            fr: 'Avis',
            de: 'Bewertungen',
            es: 'Reseñas'
        },
        faq: {
            zh: 'FAQ',
            en: 'FAQ',
            ja: 'よくある質問',
            ko: '자주 묻는 질문',
            fr: 'FAQ',
            de: 'FAQ',
            es: 'Preguntas frecuentes'
        },
        getStarted: {
            zh: '开始使用',
            en: 'Get Started',
            ja: '始める',
            ko: '시작하기',
            fr: 'Commencer',
            de: 'Loslegen',
            es: 'Empezar'
        }
    },
    // Hero Section
    hero: {
        badge: {
            zh: 'Powered By OpenClaw',
            en: 'Powered By OpenClaw',
            ja: 'Powered By OpenClaw',
            ko: 'Powered By OpenClaw',
            fr: 'Powered By OpenClaw',
            de: 'Powered By OpenClaw',
            es: 'Powered By OpenClaw'
        },
        title: {
            zh: '专为 AI Agent 构建的原生加密钱包',
            en: 'Native Crypto Wallet Built for AI Agents',
            ja: 'AI Agent のためのネイティブ暗号ウォレット',
            ko: 'AI 에이전트를 위한 네이티브 암호화폐 지갑',
            fr: 'Portefeuille Crypto Natif Conçu pour les Agents IA',
            de: 'Native Krypto-Wallet für KI-Agenten',
            es: 'Cartera Cripto Nativa Construida para Agentes IA'
        },
        subtitle: {
            zh: '一行命令，为您的 AI Agent 部署安全的多链钱包。原生集成，TEE 硬件级安全，无私钥。',
            en: 'One command to deploy a secure multi-chain wallet for your AI Agent. Native integration, TEE hardware-level security, no private keys.',
            ja: '1つのコマンドで、AI Agent用の安全なマルチチェーンウォレットをデプロイ。ネイティブ統合、TEEハードウェアレベルのセキュリティ、秘密鍵なし。',
            ko: '하나의 명령으로 AI 에이전트를 위한 안전한 멀티체인 지갑을 배포하세요. 네이티브 통합, TEE 하드웨어 수준 보안, 개인 키 없음.',
            fr: 'Une commande pour déployer un portefeuille multi-chaînes sécurisé pour votre Agent IA. Intégration native, sécurité matérielle TEE, pas de clés privées.',
            de: 'Ein Befehl, um eine sichere Multi-Chain-Wallet für Ihren KI-Agenten bereitzustellen. Native Integration, TEE-Hardware-Sicherheit, keine privaten Schlüssel.',
            es: 'Un comando para implementar una cartera multi-cadena segura para tu Agente IA. Integración nativa, seguridad de nivel de hardware TEE, sin claves privadas.'
        },
        copyBtn: {
            zh: '复制',
            en: 'Copy',
            ja: 'コピー',
            ko: '복사',
            fr: 'Copier',
            de: 'Kopieren',
            es: 'Copiar'
        },
        copied: {
            zh: '已复制',
            en: 'Copied',
            ja: 'コピー済み',
            ko: '복사됨',
            fr: 'Copié',
            de: 'Kopiert',
            es: 'Copiado'
        },
        copyHint: {
            zh: '复制后发送给 OpenClaw 即可自动安装',
            en: 'Copy and send to OpenClaw for automatic installation',
            ja: 'コピーしてOpenClawに送信すると自動インストールされます',
            ko: '복사하여 OpenClaw에 별낼면 자동 설치됩니다',
            fr: 'Copiez et envoyez à OpenClaw pour une installation automatique',
            de: 'Kopieren und an OpenClaw senden für automatische Installation',
            es: 'Copia y envía a OpenClaw para instalación automática'
        }
    },
    // Partners Section
    partners: {
        title: {
            zh: '生态合作伙伴',
            en: 'Ecosystem Partners',
            ja: 'エコシステムパートナー',
            ko: '생태계 파트너',
            fr: 'Partenaires de l\'Écosystème',
            de: 'Ökosystem-Partner',
            es: 'Socios del Ecosistema'
        }
    },
    // Stats Section
    stats: {
        wallets: {
            zh: '已部署钱包',
            en: 'Wallets Deployed',
            ja: 'デプロイ済みウォレット',
            ko: '배포된 지갑',
            fr: 'Portefeuilles Déployés',
            de: 'Bereitgestellte Wallets',
            es: 'Carteras Implementadas'
        },
        uptime: {
            zh: '安全运行时间',
            en: 'Uptime',
            ja: '稼働時間',
            ko: '가동 시간',
            fr: 'Disponibilité',
            de: 'Betriebszeit',
            es: 'Tiempo de Actividad'
        },
        clients: {
            zh: '企业客户',
            en: 'Enterprise Clients',
            ja: '企業クライアント',
            ko: '기업 고객',
            fr: 'Clients Entreprise',
            de: 'Unternehmenskunden',
            es: 'Clientes Empresariales'
        },
        chains: {
            zh: '支持公链',
            en: 'Supported Chains',
            ja: 'サポートされるチェーン',
            ko: '지원 체인',
            fr: 'Chaînes Supportées',
            de: 'Unterstützte Chains',
            es: 'Cadenas Soportadas'
        }
    },
    // Features Section
    features: {
        title: {
            zh: '核心特性',
            en: 'Core Features',
            ja: 'コア機能',
            ko: '핵심 기능',
            fr: 'Fonctionnalités Clés',
            de: 'Kernfunktionen',
            es: 'Características Principales'
        },
        subtitle: {
            zh: '为 AI Agent 打造的专业级钱包解决方案',
            en: 'Professional wallet solution built for AI Agents',
            ja: 'AI Agent のためのプロフェッショナルウォレットソリューション',
            ko: 'AI 에이전트를 위한 전문 지갑 솔루션',
            fr: 'Solution de portefeuille professionnelle conçue pour les Agents IA',
            de: 'Professionelle Wallet-Lösung für KI-Agenten',
            es: 'Solución de cartera profesional construida para Agentes IA'
        },
        tee: {
            title: {
                zh: 'TEE 安全架构',
                en: 'TEE Security Architecture',
                ja: 'TEE セキュリティアーキテクチャ',
                ko: 'TEE 보안 아키텍처',
                fr: 'Architecture de Sécurité TEE',
                de: 'TEE-Sicherheitsarchitektur',
                es: 'Arquitectura de Seguridad TEE'
            },
            desc: {
                zh: '基于 AWS Nitro Enclaves 的硬件级安全隔离，私钥永不离开安全环境',
                en: 'Hardware-level security isolation based on AWS Nitro Enclaves, private keys never leave the secure environment',
                ja: 'AWS Nitro Enclaves ベースのハードウェアレベルセキュリティ分離、秘密鍵は安全な環境を離れません',
                ko: 'AWS Nitro Enclaves 기반 하드웨어 수준 보안 격리, 개인 키는 안전한 환경을 벗어나지 않습니다',
                fr: 'Isolation de sécurité au niveau matériel basée sur AWS Nitro Enclaves, les clés privées ne quittent jamais l\'environnement sécurisé',
                de: 'Hardware-basierte Sicherheitsisolierung auf Basis von AWS Nitro Enclaves, private Schlüssel verlassen niemals die sichere Umgebung',
                es: 'Aislamiento de seguridad a nivel de hardware basado en AWS Nitro Enclaves, las claves privadas nunca abandonan el entorno seguro'
            }
        },
        fast: {
            title: {
                zh: '3 秒极速创建',
                en: '3-Second Fast Creation',
                ja: '3秒で高速作成',
                ko: '3초 고속 생성',
                fr: 'Création Rapide en 3 Secondes',
                de: '3-Sekunden-Schnellerstellung',
                es: 'Creación Rápida en 3 Segundos'
            },
            desc: {
                zh: '无私钥，无需复杂配置，一行命令即刻生成可用钱包',
                en: 'No private keys, no complex configuration, generate a usable wallet with one command',
                ja: '秘密鍵なし、複雑な設定なし、1つのコマンドですぐに使用可能なウォレットを生成',
                ko: '개인 키 없음, 복잡한 설정 없음, 하나의 명령으로 즉시 사용 가능한 지갑 생성',
                fr: 'Pas de clés privées, pas de configuration complexe, générez un portefeuille utilisable avec une commande',
                de: 'Keine privaten Schlüssel, keine komplexe Konfiguration, generieren Sie eine nutzbare Wallet mit einem Befehl',
                es: 'Sin claves privadas, sin configuración compleja, genera una cartera utilizable con un comando'
            }
        },
        multichain: {
            title: {
                zh: '多链原生支持',
                en: 'Multi-Chain Native Support',
                ja: 'マルチチェーンネイティブサポート',
                ko: '멀티체인 네이티브 지원',
                fr: 'Support Multi-Chaînes Natif',
                de: 'Native Multi-Chain-Unterstützung',
                es: 'Soporte Multi-Cadena Nativo'
            },
            desc: {
                zh: 'Ethereum、Polygon、BSC、Arbitrum 等主流公链一键切换',
                en: 'One-click switching between mainstream public chains like Ethereum, Polygon, BSC, Arbitrum',
                ja: 'Ethereum、Polygon、BSC、Arbitrum などの主要パブリックチェーンをワンクリックで切り替え',
                ko: 'Ethereum, Polygon, BSC, Arbitrum 등 주요 퍼블릭 체인 간 원클릭 전환',
                fr: 'Basculement en un clic entre les chaînes publiques principales comme Ethereum, Polygon, BSC, Arbitrum',
                de: 'Ein-Klick-Umschaltung zwischen Mainstream-Public-Chains wie Ethereum, Polygon, BSC, Arbitrum',
                es: 'Cambio con un clic entre cadenas públicas principales como Ethereum, Polygon, BSC, Arbitrum'
            }
        }
    },
    // Security Section
    security: {
        title: {
            zh: '企业级安全，Agent 操作零风险',
            en: 'Enterprise Security, Zero Risk for Agent Operations',
            ja: 'エンタープライズセキュリティ、Agent 操作のゼロリスク',
            ko: '엔터프라이즈 보안, 에이전트 작업의 제로 리스크',
            fr: 'Sécurité Entreprise, Zéro Risque pour les Opérations des Agents',
            de: 'Unternehmenssicherheit, Null Risiko für Agenten-Operationen',
            es: 'Seguridad Empresarial, Cero Riesgo para Operaciones de Agentes'
        },
        subtitle: {
            zh: 'Claw Wallet 采用多层防护体系，确保 Agent 每一次链上操作都在用户完全掌控之内。',
            en: 'Claw Wallet employs a multi-layer protection system to ensure every on-chain operation by Agents is fully under user control.',
            ja: 'Claw Wallet は多層保護システムを採用し、Agent のすべてのオンチェーン操作がユーザーの完全な管理下にあることを保証します。',
            ko: 'Claw Wallet은 다층 보호 시스템을 채택하여 에이전트의 모든 온체인 작업이 사용자의 완전한 통제 하에 있도록 보장합니다.',
            fr: 'Claw Wallet emploie un système de protection multi-couches pour garantir que chaque opération on-chain des Agents est entièrement sous le contrôle de l\'utilisateur.',
            de: 'Claw Wallet verwendet ein mehrschichtiges Schutzsystem, um sicherzustellen, dass jede On-Chain-Operation von Agenten vollständig unter der Kontrolle des Benutzers steht.',
            es: 'Claw Wallet emplea un sistema de protección multicapa para garantizar que cada operación en cadena de los Agentes esté completamente bajo el control del usuario.'
        },
        teeSharding: {
            title: {
                zh: 'TEE 可信执行环境分片',
                en: 'TEE Trusted Execution Environment Sharding',
                ja: 'TEE 信頼実行環境シャーディング',
                ko: 'TEE 신뢰 실행 환경 샤딩',
                fr: 'Sharding d\'Environnement d\'Exécution de Confiance TEE',
                de: 'TEE Trusted Execution Environment Sharding',
                es: 'Fragmentación de Entorno de Ejecución Confiable TEE'
            },
            desc: {
                zh: '基于 AWS Nitro Enclaves 可信执行环境，私钥在 AWS 硬件级隔离飞地内分片加密，充分利用 Amazon 云服务器的安全合规能力。',
                en: 'Based on AWS Nitro Enclaves trusted execution environment, private keys are sharded and encrypted within AWS hardware-isolated enclaves, fully utilizing Amazon cloud server security compliance capabilities.',
                ja: 'AWS Nitro Enclaves 信頼実行環境に基づき、秘密鍵は AWS ハードウェア分離エンクレーブ内でシャーディングおよび暗号化され、Amazon クラウドサーバーのセキュリティコンプライアンス機能を最大限に活用します。',
                ko: 'AWS Nitro Enclaves 신뢰 실행 환경을 기반으로 개인 키는 AWS 하드웨어 격리 인클레이브 내에서 샤딩 및 암호화되며 Amazon 클라우드 서버 보안 규정 준수 기능을 최대한 활용합니다.',
                fr: 'Basé sur l\'environnement d\'exécution de confiance AWS Nitro Enclaves, les clés privées sont fragmentées et chiffrées dans des enclaves isolées au niveau matériel AWS, utilisant pleinement les capacités de conformité de sécurité des serveurs cloud Amazon.',
                de: 'Basierend auf der AWS Nitro Enclaves vertrauenswürdigen Ausführungsumgebung werden private Schlüssel in AWS-hardwareisolierten Enklaven fragmentiert und verschlüsselt, wobei die Sicherheits-Compliance-Fähigkeiten von Amazon-Cloud-Servern voll genutzt werden.',
                es: 'Basado en el entorno de ejecución confiable AWS Nitro Enclaves, las claves privadas se fragmentan y cifran dentro de enclaves aislados por hardware de AWS, utilizando plenamente las capacidades de cumplimiento de seguridad de los servidores en la nube de Amazon.'
            }
        },
        txEngine: {
            title: {
                zh: '交易策略引擎拦截',
                en: 'Trading Strategy Engine Interception',
                ja: '取引戦略エンジンインターセプション',
                ko: '거래 전략 엔진 인터셉션',
                fr: 'Interception du Moteur de Stratégie de Trading',
                de: 'Handelsstrategie-Engine-Abfang',
                es: 'Intercepción del Motor de Estrategia de Trading'
            },
            desc: {
                zh: '每笔 Agent 发起的交易在广播前经过五重安全过滤：金额上限校验、目标合约白名单、操作频率限制、交易审批流程、实时安全风控。',
                en: 'Every transaction initiated by Agents undergoes five-layer security filtering before broadcast: amount limit verification, target contract whitelist, operation frequency limits, transaction approval workflow, real-time security risk control.',
                ja: 'Agent が開始したすべてのトランザクションは、ブロードキャスト前に5層のセキュリティフィルタリングを受けます：金額上限検証、対象コントラクトホワイトリスト、操作頻度制限、トランザクション承認ワークフロー、リアルタイムセキュリティリスク管理。',
                ko: '에이전트가 시작한 모든 거래는 브로드캐스트 전 5계층 보안 필터링을 거칩니다: 금액 한도 검증, 대상 계약 화이트리스트, 작업 빈도 제한, 거래 승인 워크플로우, 실시간 보안 위험 관리.',
                fr: 'Chaque transaction initiée par les Agents subit un filtrage de sécurité en cinq couches avant diffusion : vérification de la limite de montant, liste blanche des contrats cibles, limites de fréquence d\'opération, workflow d\'approbation des transactions, contrôle des risques de sécurité en temps réel.',
                de: 'Jede von Agenten initiierte Transaktion durchläuft eine fünfschichtige Sicherheitsfilterung vor der Übertragung: Betragslimit-Überprüfung, Zielvertrag-Whitelist, Betriebshäufigkeitslimits, Transaktionsgenehmigungs-Workflow, Echtzeit-Sicherheitsrisikokontrolle.',
                es: 'Cada transacción iniciada por los Agentes sufre un filtrado de seguridad de cinco capas antes de la transmisión: verificación de límite de monto, lista blanca de contratos objetivo, límites de frecuencia de operación, flujo de trabajo de aprobación de transacciones, control de riesgos de seguridad en tiempo real.'
            }
        },
        confirm: {
            title: {
                zh: '大额交易二次确认',
                en: 'Large Transaction Secondary Confirmation',
                ja: '大額取引の二次確認',
                ko: '대액 거래 이차 확인',
                fr: 'Confirmation Secondaire des Transactions Importantes',
                de: 'Sekundärbestätigung für Große Transaktionen',
                es: 'Confirmación Secundaria de Transacciones Grandes'
            },
            desc: {
                zh: '超过用户设定阈值的交易将触发推送通知，要求用户在 App 或邮件中二次授权方可广播。',
                en: 'Transactions exceeding user-set thresholds will trigger push notifications, requiring users to authorize again in the App or via email before broadcasting.',
                ja: 'ユーザー設定のしきい値を超えるトランザクションはプッシュ通知をトリガーし、ブロードキャスト前にアプリまたはメールでユーザーの再承認が必要です。',
                ko: '사용자 설정 임계값을 초과하는 거래는 푸시 알림을 트리거하며, 브로드캐스트 전에 앱이나 이메일에서 사용자의 재승인이 필요합니다.',
                fr: 'Les transactions dépassant les seuils définis par l\'utilisateur déclencheront des notifications push, nécessitant une nouvelle autorisation de l\'utilisateur dans l\'App ou par email avant diffusion.',
                de: 'Transaktionen, die benutzerdefinierte Schwellen überschreiten, lösen Push-Benachrichtigungen aus und erfordern eine erneute Autorisierung des Benutzers in der App oder per E-Mail vor der Übertragung.',
                es: 'Las transacciones que excedan los umbrales establecidos por el usuario activarán notificaciones push, requiriendo que el usuario autorice nuevamente en la App o por correo electrónico antes de la transmisión.'
            }
        },
        scan: {
            title: {
                zh: '链上合约实时扫描',
                en: 'On-Chain Contract Real-Time Scanning',
                ja: 'オンチェーンコントラクトのリアルタイムスキャン',
                ko: '온체인 계약 실시간 스캐닝',
                fr: 'Scanning en Temps Réel des Contrats On-Chain',
                de: 'Echtzeit-Scanning von On-Chain-Verträgen',
                es: 'Escaneo en Tiempo Real de Contratos On-Chain'
            },
            desc: {
                zh: '集成 Bitslab Safe 安全 API，Agent 发起交互前自动扫描目标合约风险评分与漏洞特征，高风险合约自动拦截告警。',
                en: 'Integrated with Bitslab Safe security API, automatically scans target contract risk scores and vulnerability characteristics before Agent interaction, automatically intercepting and alerting on high-risk contracts.',
                ja: 'Bitslab Safe セキュリティ API と統合し、Agent がインタラクションを開始する前に対象コントラクトのリスクスコアと脆弱性の特徴を自動的にスキャンし、高リスクコントラクトを自動的にインターセプトしてアラートを発します。',
                ko: 'Bitslab Safe 보안 API와 통합되어 에이전트가 상호작용을 시작하기 전에 대상 계약의 위험 점수와 취약점 특성을 자동으로 스캔하고 고위험 계약을 자동으로 차단하고 경고합니다.',
                fr: 'Intégré à l\'API de sécurité Bitslab Safe, scanne automatiquement les scores de risque des contrats cibles et les caractéristiques de vulnérabilité avant l\'interaction de l\'Agent, interceptant et alertant automatiquement sur les contrats à haut risque.',
                de: 'Integriert mit der Bitslab Safe-Sicherheits-API, scannt automatisch Zielvertragsrisikobewertungen und Schwachstellenmerkmale vor der Agenten-Interaktion und unterbricht und warnt automatisch bei Hochrisikoverträgen.',
                es: 'Integrado con la API de seguridad Bitslab Safe, escanea automáticamente las puntuaciones de riesgo de contratos objetivo y características de vulnerabilidad antes de la interacción del Agente, interceptando y alertando automáticamente sobre contratos de alto riesgo.'
            }
        },
        encryption: {
            title: {
                zh: '端到端加密通信',
                en: 'End-to-End Encrypted Communication',
                ja: 'エンドツーエンド暗号化通信',
                ko: '종단 간 암호화 통신',
                fr: 'Communication Chiffrée de Bout en Bout',
                de: 'Ende-zu-Ende-Verschlüsselte Kommunikation',
                es: 'Comunicación Cifrada de Extremo a Extremo'
            },
            desc: {
                zh: 'OpenClaw Agent 与 Claw Wallet 之间所有通信均经过 TLS 1.3 + 消息级签名双重加密，防中间人攻击。',
                en: 'All communication between OpenClaw Agent and Claw Wallet is doubly encrypted with TLS 1.3 + message-level signatures, preventing man-in-the-middle attacks.',
                ja: 'OpenClaw Agent と Claw Wallet 間のすべての通信は TLS 1.3 + メッセージレベル署名で二重に暗号化され、中間者攻撃を防ぎます。',
                ko: 'OpenClaw 에이전트와 Claw Wallet 간의 모든 통신은 TLS 1.3 + 메시지 수준 서명으로 이중 암호화되어 중간자 공격을 방지합니다.',
                fr: 'Toute communication entre OpenClaw Agent et Claw Wallet est doublement chiffrée avec TLS 1.3 + signatures au niveau des messages, prévenant les attaques de l\'homme du milieu.',
                de: 'Alle Kommunikation zwischen OpenClaw Agent und Claw Wallet ist mit TLS 1.3 + Nachrichtenebenen-Signaturen doppelt verschlüsselt, was Man-in-the-Middle-Angriffe verhindert.',
                es: 'Toda la comunicación entre OpenClaw Agent y Claw Wallet está doblemente cifrada con TLS 1.3 + firmas a nivel de mensaje, previniendo ataques de intermediarios.'
            }
        }
    },
    // Usage Section
    usage: {
        title: {
            zh: '原生集成，开箱即用',
            en: 'Native Integration, Ready to Use',
            ja: 'ネイティブ統合、すぐに使用可能',
            ko: '네이티브 통합, 바로 사용 가능',
            fr: 'Intégration Native, Prêt à l\'Emploi',
            de: 'Native Integration, Sofort Einsatzbereit',
            es: 'Integración Nativa, Listo para Usar'
        },
        subtitle: {
            zh: '作为 OpenClaw 原生 Skill，安装后即刻拥有钱包能力。无需额外配置，通过自然语言即可操控您的加密资产。',
            en: 'As a native OpenClaw Skill, instantly gain wallet capabilities after installation. No additional configuration needed, control your crypto assets through natural language.',
            ja: 'OpenClaw のネイティブ Skill として、インストール後すぐにウォレット機能を獲得。追加設定不要、自然言語で暗号資産を操作できます。',
            ko: 'OpenClaw의 네이티브 Skill로 설치 후 즉시 지갑 기능 획득. 추가 설정 불필요, 자연어로 암호화폐 자산을 제어할 수 있습니다.',
            fr: 'En tant que Skill natif OpenClaw, gagnez instantanément des capacités de portefeuille après l\'installation. Aucune configuration supplémentaire requise, contrôlez vos actifs crypto via le langage naturel.',
            de: 'Als native OpenClaw Skill sofort nach der Installation Wallet-Fähigkeiten erlangen. Keine zusätzliche Konfiguration erforderlich, steuern Sie Ihre Krypto-Vermögenswerte durch natürliche Sprache.',
            es: 'Como Skill nativo de OpenClaw, obtén instantáneamente capacidades de cartera después de la instalación. Sin configuración adicional necesaria, controla tus activos cripto a través del lenguaje natural.'
        },
        create: {
            zh: '创建钱包',
            en: 'Create Wallet',
            ja: 'ウォレットを作成',
            ko: '지갑 생성',
            fr: 'Créer un Portefeuille',
            de: 'Wallet Erstellen',
            es: 'Crear Cartera'
        },
        balance: {
            zh: '查询余额',
            en: 'Check Balance',
            ja: '残高を確認',
            ko: '잔액 조회',
            fr: 'Vérifier le Solde',
            de: 'Guthaben Prüfen',
            es: 'Verificar Saldo'
        },
        send: {
            zh: '发送交易',
            en: 'Send Transaction',
            ja: '取引を送信',
            ko: '거래 전송',
            fr: 'Envoyer une Transaction',
            de: 'Transaktion Senden',
            es: 'Enviar Transacción'
        }
    },
    // Testimonials Section
    testimonials: {
        badge: {
            zh: '用户反馈',
            en: 'User Feedback',
            ja: 'ユーザーフィードバック',
            ko: '사용자 피드백',
            fr: 'Retour des Utilisateurs',
            de: 'Benutzerfeedback',
            es: 'Retroalimentación de Usuarios'
        },
        title: {
            zh: '用户怎么说',
            en: 'What Users Say',
            ja: 'ユーザーの声',
            ko: '사용자들의 이야기',
            fr: 'Ce que Disent les Utilisateurs',
            de: 'Was Benutzer Sagen',
            es: 'Lo que Dicen los Usuarios'
        },
        subtitle: {
            zh: '来自 OpenClaw 生态的真实用户反馈',
            en: 'Real user feedback from the OpenClaw ecosystem',
            ja: 'OpenClaw エコシステムからのリアルなユーザーフィードバック',
            ko: 'OpenClaw 생태계의 실제 사용자 피드백',
            fr: 'Retour d\'utilisateurs réels de l\'écosystème OpenClaw',
            de: 'Echtes Benutzerfeedback aus dem OpenClaw-Ökosystem',
            es: 'Retroalimentación real de usuarios del ecosistema OpenClaw'
        }
    },
    // FAQ Section
    faq: {
        title: {
            zh: '常见问题',
            en: 'FAQ',
            ja: 'よくある質問',
            ko: '자주 묻는 질문',
            fr: 'Questions Fréquentes',
            de: 'Häufige Fragen',
            es: 'Preguntas Frecuentes'
        },
        subtitle: {
            zh: '关于 ClawWallet 的常见问题解答',
            en: 'Frequently asked questions about ClawWallet',
            ja: 'ClawWallet に関するよくある質問への回答',
            ko: 'ClawWallet에 대한 자주 묻는 질문 답변',
            fr: 'Questions fréquemment posées sur ClawWallet',
            de: 'Häufig gestellte Fragen zu ClawWallet',
            es: 'Preguntas frecuentes sobre ClawWallet'
        },
        q1: {
            question: {
                zh: 'ClawWallet 是什么？',
                en: 'What is ClawWallet?',
                ja: 'ClawWallet とは何ですか？',
                ko: 'ClawWallet은 무엇인가요?',
                fr: 'Qu\'est-ce que ClawWallet ?',
                de: 'Was ist ClawWallet?',
                es: '¿Qué es ClawWallet?'
            },
            answer: {
                zh: 'ClawWallet 是专为 OpenClaw AI Agent 设计的原生安全加密钱包 Skill。通过简单的命令安装，即可为您的 AI Agent 添加安全的多链钱包能力。',
                en: 'ClawWallet is a native secure crypto wallet Skill designed specifically for OpenClaw AI Agents. Install with a simple command to add secure multi-chain wallet capabilities to your AI Agent.',
                ja: 'ClawWallet は、OpenClaw AI Agent 専用に設計されたネイティブ安全暗号ウォレット Skill です。簡単なコマンドでインストールし、AI Agent に安全なマルチチェーンウォレット機能を追加できます。',
                ko: 'ClawWallet은 OpenClaw AI 에이전트를 위해 특별히 설계된 네이티브 보안 암호화폐 지갑 Skill입니다. 간단한 명령으로 설치하여 AI 에이전트에 안전한 멀티체인 지갑 기능을 추가하세요.',
                fr: 'ClawWallet est un Skill de portefeuille crypto sécurisé natif conçu spécifiquement pour les Agents IA OpenClaw. Installez avec une simple commande pour ajouter des capacités de portefeuille multi-chaînes sécurisées à votre Agent IA.',
                de: 'ClawWallet ist ein native sichere Krypto-Wallet-Skill, speziell für OpenClaw KI-Agenten entwickelt. Installieren Sie mit einem einfachen Befehl, um Ihrem KI-Agenten sichere Multi-Chain-Wallet-Fähigkeiten hinzuzufügen.',
                es: 'ClawWallet es un Skill de cartera cripto segura nativa diseñado específicamente para Agentes IA de OpenClaw. Instala con un comando simple para agregar capacidades de cartera multi-cadena seguras a tu Agente IA.'
            }
        },
        q2: {
            question: {
                zh: '如何安装 ClawWallet？',
                en: 'How to install ClawWallet?',
                ja: 'ClawWallet のインストール方法は？',
                ko: 'ClawWallet을 어떻게 설치하나요?',
                fr: 'Comment installer ClawWallet ?',
                de: 'Wie installiert man ClawWallet?',
                es: '¿Cómo instalar ClawWallet?'
            },
            answer: {
                zh: '只需在终端运行命令 npx ClawWallet@latest install clawwallet，或直接向 OpenClaw 发送「安装 clawwallet」即可自动完成部署。',
                en: 'Simply run the command npx ClawWallet@latest install clawwallet in your terminal, or send "install clawwallet" directly to OpenClaw for automatic deployment.',
                ja: 'ターミナルでコマンド npx ClawWallet@latest install clawwallet を実行するか、OpenClaw に「install clawwallet」と直接送信するだけで自動的にデプロイされます。',
                ko: '터미널에서 npx ClawWallet@latest install clawwallet 명령을 실행하거나, OpenClaw에 "install clawwallet"을 직접 보내면 자동으로 배포됩니다.',
                fr: 'Exécutez simplement la commande npx ClawWallet@latest install clawwallet dans votre terminal, ou envoyez "install clawwallet" directement à OpenClaw pour un déploiement automatique.',
                de: 'Führen Sie einfach den Befehl npx ClawWallet@latest install clawwallet in Ihrem Terminal aus oder senden Sie "install clawwallet" direkt an OpenClaw für eine automatische Bereitstellung.',
                es: 'Simplemente ejecuta el comando npx ClawWallet@latest install clawwallet en tu terminal, o envía "install clawwallet" directamente a OpenClaw para una implementación automática.'
            }
        },
        q3: {
            question: {
                zh: '我的资产安全吗？',
                en: 'Is my asset secure?',
                ja: '資産は安全ですか？',
                ko: '내 자산이 안전한가요?',
                fr: 'Mes actifs sont-ils sécurisés ?',
                de: 'Sind meine Vermögenswerte sicher?',
                es: '¿Mis activos están seguros?'
            },
            answer: {
                zh: '绝对安全。ClawWallet 采用 AWS Nitro Enclaves TEE 技术，私钥在硬件安全环境中生成和存储，连我们自己也无法访问。',
                en: 'Absolutely secure. ClawWallet uses AWS Nitro Enclaves TEE technology, private keys are generated and stored in a hardware-secure environment that even we cannot access.',
                ja: '絶対に安全です。ClawWallet は AWS Nitro Enclaves TEE 技術を採用し、秘密鍵はハードウェアセキュア環境で生成・保存され、私たち自身もアクセスできません。',
                ko: '완전히 안전합니다. ClawWallet은 AWS Nitro Enclaves TEE 기술을 사용하여 개인 키는 하드웨어 보안 환경에서 생성 및 저장되며, 우리 자신도 접근할 수 없습니다.',
                fr: 'Absolument sécurisé. ClawWallet utilise la technologie AWS Nitro Enclaves TEE, les clés privées sont générées et stockées dans un environnement matériel sécurisé auquel même nous ne pouvons pas accéder.',
                de: 'Absolut sicher. ClawWallet verwendet AWS Nitro Enclaves TEE-Technologie, private Schlüssel werden in einer hardware-sicheren Umgebung generiert und gespeichert, auf die selbst wir keinen Zugriff haben.',
                es: 'Absolutamente seguro. ClawWallet utiliza tecnología AWS Nitro Enclaves TEE, las claves privadas se generan y almacenan en un entorno seguro de hardware al que incluso nosotros no podemos acceder.'
            }
        },
        q4: {
            question: {
                zh: '支持哪些区块链？',
                en: 'Which blockchains are supported?',
                ja: 'どのブロックチェーンをサポートしていますか？',
                ko: '어떤 블록체인을 지원하나요?',
                fr: 'Quelles blockchains sont supportées ?',
                de: 'Welche Blockchains werden unterstützt?',
                es: '¿Qué blockchains están soportadas?'
            },
            answer: {
                zh: '目前支持 Ethereum、Polygon、BSC、Arbitrum 等主流公链，未来将持续添加更多网络支持。',
                en: 'Currently supports mainstream public chains including Ethereum, Polygon, BSC, Arbitrum, with more networks to be added continuously in the future.',
                ja: '現在は Ethereum、Polygon、BSC、Arbitrum などの主要パブリックチェーンをサポートしており、今後もさらに多くのネットワークを追加していく予定です。',
                ko: '현재 Ethereum, Polygon, BSC, Arbitrum 등 주요 퍼블릭 체인을 지원하며, 앞으로 더 많은 네트워크를 지속적으로 추가할 예정입니다.',
                fr: 'Supporte actuellement les chaînes publiques principales incluant Ethereum, Polygon, BSC, Arbitrum, avec plus de réseaux à ajouter continuellement à l\'avenir.',
                de: 'Unterstützt derzeit Mainstream-Public-Chains einschließlich Ethereum, Polygon, BSC, Arbitrum, mit mehr Netzwerken, die kontinuierlich in Zukunft hinzugefügt werden.',
                es: 'Actualmente soporta cadenas públicas principales incluyendo Ethereum, Polygon, BSC, Arbitrum, con más redes por agregar continuamente en el futuro.'
            }
        },
        q5: {
            question: {
                zh: '需要私钥吗？',
                en: 'Do I need a private key?',
                ja: '秘密鍵は必要ですか？',
                ko: '개인 키가 필요한가요?',
                fr: 'Ai-je besoin d\'une clé privée ?',
                de: 'Brauche ich einen privaten Schlüssel?',
                es: '¿Necesito una clave privada?'
            },
            answer: {
                zh: '不需要。ClawWallet 通过 OpenClaw 账户体系安全管理，无需管理复杂的私钥，也不会有私钥丢失的风险。',
                en: 'No. ClawWallet securely manages through the OpenClaw account system, no need to manage complex private keys, and no risk of losing private keys.',
                ja: '必要ありません。ClawWallet は OpenClaw アカウントシステムを通じて安全に管理され、複雑な秘密鍵を管理する必要がなく、秘密鍵を紛失するリスクもありません。',
                ko: '필요 없습니다. ClawWallet은 OpenClaw 계정 시스템을 통해 안전하게 관리되며, 복잡한 개인 키를 관리할 필요가 없고 개인 키를 잃어버릴 위험도 없습니다.',
                fr: 'Non. ClawWallet gère de manière sécurisée via le système de compte OpenClaw, pas besoin de gérer des clés privées complexes, et aucun risque de perdre les clés privées.',
                de: 'Nein. ClawWallet verwaltet sicher über das OpenClaw-Kontosystem, keine Notwendigkeit, komplexe private Schlüssel zu verwalten, und kein Risiko, private Schlüssel zu verlieren.',
                es: 'No. ClawWallet gestiona de forma segura a través del sistema de cuentas OpenClaw, no es necesario gestionar claves privadas complejas, y no hay riesgo de perder las claves privadas.'
            }
        }
    },
    // CTA Section
    cta: {
        title: {
            zh: '为您的 OpenClaw 部署原生钱包',
            en: 'Deploy Native Wallet for Your OpenClaw',
            ja: 'OpenClaw にネイティブウォレットをデプロイ',
            ko: 'OpenClaw를 위한 네이티브 지갑 배포',
            fr: 'Déployer un Portefeuille Natif pour Votre OpenClaw',
            de: 'Native Wallet für Ihren OpenClaw Bereitstellen',
            es: 'Implementar Cartera Nativa para tu OpenClaw'
        },
        subtitle: {
            zh: '复制下方命令，发送给 OpenClaw，3 秒完成部署',
            en: 'Copy the command below, send to OpenClaw, deploy in 3 seconds',
            ja: '以下のコマンドをコピーして OpenClaw に送信し、3 秒でデプロイ',
            ko: '아래 명령을 복사하여 OpenClaw에 보내면 3초 만에 배포 완료',
            fr: 'Copiez la commande ci-dessous, envoyez à OpenClaw, déployez en 3 secondes',
            de: 'Kopieren Sie den Befehl unten, senden Sie an OpenClaw, bereitstellen in 3 Sekunden',
            es: 'Copia el comando de abajo, envía a OpenClaw, implementa en 3 segundos'
        },
        footer: {
            zh: '免费开始使用 · 无需信用卡 · 3 秒完成部署',
            en: 'Free to start · No credit card required · Deploy in 3 seconds',
            ja: '無料で開始 · クレジットカード不要 · 3 秒でデプロイ',
            ko: '무료로 시작 · 신용카드 불필요 · 3초 만에 배포',
            fr: 'Gratuit pour commencer · Pas de carte de crédit requise · Déploiement en 3 secondes',
            de: 'Kostenlos starten · Keine Kreditkarte erforderlich · Bereitstellung in 3 Sekunden',
            es: 'Gratis para empezar · No se requiere tarjeta de crédito · Implementa en 3 segundos'
        }
    },
    // Footer
    footer: {
        copyright: {
            zh: '© 2026 Claw Wallet. OpenClaw 原生安全加密钱包',
            en: '© 2026 Claw Wallet. OpenClaw Native Secure Crypto Wallet',
            ja: '© 2026 Claw Wallet. OpenClaw ネイティブセキュア暗号ウォレット',
            ko: '© 2026 Claw Wallet. OpenClaw 네이티브 보안 암호화폐 지갑',
            fr: '© 2026 Claw Wallet. Portefeuille Crypto Sécurisé Natif OpenClaw',
            de: '© 2026 Claw Wallet. OpenClaw Native Sichere Krypto-Wallet',
            es: '© 2026 Claw Wallet. Cartera Cripto Segura Nativa OpenClaw'
        }
    }
};
function getTranslation(key, lang) {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys){
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return key; // Return key if translation not found
        }
    }
    if (value && typeof value === 'object' && lang in value) {
        return value[lang];
    }
    return key;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landingpage/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landingpage$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landingpage/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const installCommand = "npx ClawWallet@latest install clawwallet";
const navLinks = [
    {
        key: "nav.features",
        href: "#features"
    },
    {
        key: "nav.security",
        href: "#security"
    },
    {
        key: "nav.reviews",
        href: "#testimonials"
    },
    {
        key: "nav.faq",
        href: "#faq"
    }
];
const statsKeys = [
    {
        value: "10K+",
        key: "stats.wallets"
    },
    {
        value: "99.9%",
        key: "stats.uptime"
    },
    {
        value: "50+",
        key: "stats.clients"
    },
    {
        value: "4",
        key: "stats.chains"
    }
];
const featuresKeys = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        titleKey: "features.tee.title",
        descKey: "features.tee.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        titleKey: "features.fast.title",
        descKey: "features.fast.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        titleKey: "features.multichain.title",
        descKey: "features.multichain.desc"
    }
];
const detailedFeaturesKeys = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
        titleKey: "security.teeSharding.title",
        descKey: "security.teeSharding.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        titleKey: "security.txEngine.title",
        descKey: "security.txEngine.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
        titleKey: "security.confirm.title",
        descKey: "security.confirm.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        titleKey: "security.scan.title",
        descKey: "security.scan.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
        titleKey: "security.encryption.title",
        descKey: "security.encryption.desc"
    }
];
const faqKeys = [
    {
        qKey: "faq.q1.question",
        aKey: "faq.q1.answer"
    },
    {
        qKey: "faq.q2.question",
        aKey: "faq.q2.answer"
    },
    {
        qKey: "faq.q3.question",
        aKey: "faq.q3.answer"
    },
    {
        qKey: "faq.q4.question",
        aKey: "faq.q4.answer"
    },
    {
        qKey: "faq.q5.question",
        aKey: "faq.q5.answer"
    }
];
const partners = [
    {
        name: "Ethereum",
        logoPath: "/logos/ethereum.png"
    },
    {
        name: "Monad",
        logoPath: "/logos/monad.png"
    },
    {
        name: "SUI",
        logoPath: "/logos/sui.png"
    },
    {
        name: "Polygon",
        logoPath: "/logos/polygon.png"
    },
    {
        name: "BSC",
        logoPath: "/logos/bsc.png"
    }
];
const testimonials = [
    {
        name: "张明",
        nameEn: "Zhang Ming",
        role: "AI 开发者",
        roleEn: "AI Developer",
        company: "TechFlow",
        avatar: "👨‍💻",
        content: "ClawWallet 让我们的 AI Agent 瞬间拥有了加密支付能力，集成过程不到5分钟。TEE安全架构让我们非常放心。",
        contentEn: "ClawWallet gave our AI Agent instant crypto payment capabilities, integration took less than 5 minutes. The TEE security architecture gives us complete peace of mind.",
        rating: 5
    },
    {
        name: "李雪",
        nameEn: "Li Xue",
        role: "产品经理",
        roleEn: "Product Manager",
        company: "DeFi Labs",
        avatar: "👩‍💼",
        content: "作为OpenClaw原生Skill，ClawWallet的无缝体验令人印象深刻。我们的用户现在可以通过自然语言完成加密交易。",
        contentEn: "As a native OpenClaw Skill, ClawWallet's seamless experience is impressive. Our users can now complete crypto transactions through natural language.",
        rating: 5
    },
    {
        name: "王强",
        nameEn: "Wang Qiang",
        role: "CTO",
        roleEn: "CTO",
        company: "ChainMind",
        avatar: "👨‍🚀",
        content: "无私钥设计解决了我们最大的痛点。团队成员不再需要担心私钥管理，安全性反而更高了。",
        contentEn: "The keyless design solved our biggest pain point. Team members no longer worry about key management, and security is actually higher.",
        rating: 5
    }
];
function FAQItem(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "90af07cdd455c2e4ee36efc8961f1795049d67dd05bc6217f3472d38309b40d8") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "90af07cdd455c2e4ee36efc8961f1795049d67dd05bc6217f3472d38309b40d8";
    }
    const { question, answer } = t0;
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== isOpen) {
        t1 = ({
            "FAQItem[<button>.onClick]": ()=>setIsOpen(!isOpen)
        })["FAQItem[<button>.onClick]"];
        $[1] = isOpen;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== question) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-medium text-gray-900",
            children: question
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[3] = question;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== isOpen) {
        t3 = isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "w-5 h-5 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 166,
            columnNumber: 19
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "w-5 h-5 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 166,
            columnNumber: 69
        }, this);
        $[5] = isOpen;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t1,
            className: "w-full py-5 flex items-center justify-between text-left",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 174,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== answer || $[12] !== isOpen) {
        t5 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                height: 0
            },
            animate: {
                opacity: 1,
                height: "auto"
            },
            exit: {
                opacity: 0,
                height: 0
            },
            className: "pb-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-sm leading-relaxed",
                children: answer
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 193,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 184,
            columnNumber: 20
        }, this);
        $[11] = answer;
        $[12] = isOpen;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== t4 || $[15] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-gray-100",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 202,
            columnNumber: 10
        }, this);
        $[14] = t4;
        $[15] = t5;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    return t6;
}
_s(FAQItem, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = FAQItem;
function LandingPage() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(320);
    if ($[0] !== "90af07cdd455c2e4ee36efc8961f1795049d67dd05bc6217f3472d38309b40d8") {
        for(let $i = 0; $i < 320; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "90af07cdd455c2e4ee36efc8961f1795049d67dd05bc6217f3472d38309b40d8";
    }
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentLang, setCurrentLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("zh");
    const [isLangMenuOpen, setIsLangMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "LandingPage[handleCopy]": async ()=>{
                await navigator.clipboard.writeText(installCommand);
                setCopied(true);
                setTimeout({
                    "LandingPage[handleCopy > setTimeout()]": ()=>setCopied(false)
                }["LandingPage[handleCopy > setTimeout()]"], 2000);
            }
        })["LandingPage[handleCopy]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleCopy = t0;
    let t1;
    if ($[2] !== currentLang) {
        t1 = ({
            "LandingPage[t]": (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landingpage$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTranslation"])(key, currentLang)
        })["LandingPage[t]"];
        $[2] = currentLang;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const t = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 252,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center gap-3 group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-9 h-9 rounded-xl overflow-hidden shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-shadow",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/claw.png",
                        alt: "ClawWallet",
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 259,
                        columnNumber: 201
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 259,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-900 font-bold text-sm tracking-tight",
                    children: "ClawWallet"
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 259,
                    columnNumber: 286
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 259,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== isLangMenuOpen) {
        t4 = ({
            "LandingPage[<button>.onClick]": ()=>setIsLangMenuOpen(!isLangMenuOpen)
        })["LandingPage[<button>.onClick]"];
        $[6] = isLangMenuOpen;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
            className: "w-4 h-4 text-gray-500"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 276,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== currentLang) {
        t6 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landingpage$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"].find({
            "LandingPage[languages.find()]": (l)=>l.code === currentLang
        }["LandingPage[languages.find()]"])?.flag;
        $[9] = currentLang;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-700",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 293,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "w-3 h-3 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 301,
            columnNumber: 10
        }, this);
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t4 || $[15] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t4,
            className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm",
            children: [
                t5,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 308,
            columnNumber: 10
        }, this);
        $[14] = t4;
        $[15] = t7;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== currentLang || $[18] !== isLangMenuOpen) {
        t10 = isLangMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 8
            },
            animate: {
                opacity: 1,
                y: 0
            },
            className: "absolute top-full right-0 mt-2 w-40 bg-white rounded-xl border border-gray-100 shadow-xl py-1 max-h-64 overflow-y-auto",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landingpage$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"].map({
                "LandingPage[languages.map()]": (lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "LandingPage[languages.map() > <button>.onClick]": ()=>{
                                setCurrentLang(lang.code);
                                setIsLangMenuOpen(false);
                            }
                        }["LandingPage[languages.map() > <button>.onClick]"],
                        className: `w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 ${currentLang === lang.code ? "text-orange-600" : "text-gray-700"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: lang.flag
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 329,
                                columnNumber: 238
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: lang.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 329,
                                columnNumber: 262
                            }, this)
                        ]
                    }, lang.code, true, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 324,
                        columnNumber: 49
                    }, this)
            }["LandingPage[languages.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 317,
            columnNumber: 29
        }, this);
        $[17] = currentLang;
        $[18] = isLangMenuOpen;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t10 || $[21] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t9;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://github.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                className: "w-4 h-4 text-gray-600"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 348,
                columnNumber: 193
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 348,
            columnNumber: 11
        }, this);
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center gap-2",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://twitter.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                        className: "w-4 h-4 text-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 355,
                        columnNumber: 250
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 355,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== isMobileMenuOpen) {
        t14 = ({
            "LandingPage[<button>.onClick]": ()=>setIsMobileMenuOpen(!isMobileMenuOpen)
        })["LandingPage[<button>.onClick]"];
        $[25] = isMobileMenuOpen;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== isMobileMenuOpen) {
        t15 = isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "w-5 h-5 text-gray-600"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 372,
            columnNumber: 30
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
            className: "w-5 h-5 text-gray-600"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 372,
            columnNumber: 72
        }, this);
        $[27] = isMobileMenuOpen;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== t14 || $[30] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t14,
            className: "md:hidden w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[29] = t14;
        $[30] = t15;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== t11 || $[33] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative border-b border-gray-200/50 bg-white/70 backdrop-blur-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        t3,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                t11,
                                t13,
                                t16
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 389,
                            columnNumber: 195
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 389,
                    columnNumber: 135
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 389,
                columnNumber: 95
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 389,
            columnNumber: 11
        }, this);
        $[32] = t11;
        $[33] = t16;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== isMobileMenuOpen || $[36] !== t) {
        t18 = isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                height: 0
            },
            animate: {
                opacity: 1,
                height: "auto"
            },
            exit: {
                opacity: 0,
                height: 0
            },
            className: "md:hidden bg-white border-b border-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 py-4 space-y-3",
                children: [
                    navLinks.map({
                        "LandingPage[navLinks.map()]": (link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                onClick: {
                                    "LandingPage[navLinks.map() > <Link>.onClick]": ()=>setIsMobileMenuOpen(false)
                                }["LandingPage[navLinks.map() > <Link>.onClick]"],
                                className: "block py-2 text-gray-600 hover:text-gray-900",
                                children: t(link.key)
                            }, link.href, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 408,
                                columnNumber: 50
                            }, this)
                    }["LandingPage[navLinks.map()]"]),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-3 border-t border-gray-100 flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com",
                                className: "flex items-center gap-2 text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 411,
                                        columnNumber: 193
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "GitHub"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 411,
                                        columnNumber: 223
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 411,
                                columnNumber: 114
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://twitter.com",
                                className: "flex items-center gap-2 text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 411,
                                        columnNumber: 346
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "Twitter"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 411,
                                        columnNumber: 377
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 411,
                                columnNumber: 266
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 411,
                        columnNumber: 43
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 407,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 398,
            columnNumber: 31
        }, this);
        $[35] = isMobileMenuOpen;
        $[36] = t;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    let t19;
    if ($[38] !== t17 || $[39] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "fixed top-0 left-0 right-0 z-50",
            children: [
                t2,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 420,
            columnNumber: 11
        }, this);
        $[38] = t17;
        $[39] = t18;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    let t21;
    let t22;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            opacity: 0,
            y: 20
        };
        t21 = {
            opacity: 1,
            y: 0
        };
        t22 = {
            duration: 0.5
        };
        $[41] = t20;
        $[42] = t21;
        $[43] = t22;
    } else {
        t20 = $[41];
        t21 = $[42];
        t22 = $[43];
    }
    let t23;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 452,
            columnNumber: 11
        }, this);
        $[44] = t23;
    } else {
        t23 = $[44];
    }
    let t24;
    if ($[45] !== t) {
        t24 = t("hero.badge");
        $[45] = t;
        $[46] = t24;
    } else {
        t24 = $[46];
    }
    let t25;
    if ($[47] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative inline-block",
            children: [
                "ClawWallet",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute -top-2 -right-2 translate-x-full -translate-y-1/2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold shadow-lg shadow-orange-500/30 whitespace-nowrap tracking-wide",
                        children: [
                            t23,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t24
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 467,
                                columnNumber: 329
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 467,
                        columnNumber: 138
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 467,
                    columnNumber: 61
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 467,
            columnNumber: 11
        }, this);
        $[47] = t24;
        $[48] = t25;
    } else {
        t25 = $[48];
    }
    let t26;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 475,
            columnNumber: 11
        }, this);
        $[49] = t26;
    } else {
        t26 = $[49];
    }
    let t27;
    if ($[50] !== t) {
        t27 = t("hero.title");
        $[50] = t;
        $[51] = t27;
    } else {
        t27 = $[51];
    }
    let t28;
    if ($[52] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-orange-500",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 490,
            columnNumber: 11
        }, this);
        $[52] = t27;
        $[53] = t28;
    } else {
        t28 = $[53];
    }
    let t29;
    if ($[54] !== t25 || $[55] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.1]",
            children: [
                t25,
                t26,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 498,
            columnNumber: 11
        }, this);
        $[54] = t25;
        $[55] = t28;
        $[56] = t29;
    } else {
        t29 = $[56];
    }
    let t30;
    if ($[57] !== t) {
        t30 = t("hero.subtitle");
        $[57] = t;
        $[58] = t30;
    } else {
        t30 = $[58];
    }
    let t31;
    if ($[59] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg text-gray-500 max-w-lg mx-auto leading-relaxed",
            children: t30
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 515,
            columnNumber: 11
        }, this);
        $[59] = t30;
        $[60] = t31;
    } else {
        t31 = $[60];
    }
    let t32;
    if ($[61] !== t29 || $[62] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t29,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 523,
            columnNumber: 11
        }, this);
        $[61] = t29;
        $[62] = t31;
        $[63] = t32;
    } else {
        t32 = $[63];
    }
    let t33;
    let t34;
    let t35;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = {
            opacity: 0,
            y: 20
        };
        t34 = {
            opacity: 1,
            y: 0
        };
        t35 = {
            delay: 0.1
        };
        $[64] = t33;
        $[65] = t34;
        $[66] = t35;
    } else {
        t33 = $[64];
        t34 = $[65];
        t35 = $[66];
    }
    let t36;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
            className: "text-sm text-gray-300 font-mono px-4",
            children: installCommand
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 555,
            columnNumber: 11
        }, this);
        $[67] = t36;
    } else {
        t36 = $[67];
    }
    const t37 = `flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${copied ? "bg-green-500 text-white" : "bg-white text-gray-900 hover:bg-gray-100"}`;
    let t38;
    if ($[68] !== copied || $[69] !== t) {
        t38 = copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 563,
                    columnNumber: 22
                }, this),
                t("hero.copied")
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 563,
                    columnNumber: 77
                }, this),
                t("hero.copyBtn")
            ]
        }, void 0, true);
        $[68] = copied;
        $[69] = t;
        $[70] = t38;
    } else {
        t38 = $[70];
    }
    let t39;
    if ($[71] !== t37 || $[72] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center gap-2 px-2 py-2 bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl shadow-black/20",
            children: [
                t36,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleCopy,
                    className: t37,
                    children: t38
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 572,
                    columnNumber: 148
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 572,
            columnNumber: 11
        }, this);
        $[71] = t37;
        $[72] = t38;
        $[73] = t39;
    } else {
        t39 = $[73];
    }
    let t40;
    if ($[74] !== t) {
        t40 = t("hero.copyHint");
        $[74] = t;
        $[75] = t40;
    } else {
        t40 = $[75];
    }
    let t41;
    if ($[76] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-sm mt-4",
            children: t40
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 589,
            columnNumber: 11
        }, this);
        $[76] = t40;
        $[77] = t41;
    } else {
        t41 = $[77];
    }
    let t42;
    if ($[78] !== t39 || $[79] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t33,
            animate: t34,
            transition: t35,
            className: "pt-4",
            children: [
                t39,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 597,
            columnNumber: 11
        }, this);
        $[78] = t39;
        $[79] = t41;
        $[80] = t42;
    } else {
        t42 = $[80];
    }
    let t43;
    if ($[81] !== t32 || $[82] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative pt-32 pb-20 lg:pt-40",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t20,
                    animate: t21,
                    transition: t22,
                    className: "space-y-8",
                    children: [
                        t32,
                        t42
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 606,
                    columnNumber: 114
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 606,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 606,
            columnNumber: 11
        }, this);
        $[81] = t32;
        $[82] = t42;
        $[83] = t43;
    } else {
        t43 = $[83];
    }
    let t44;
    if ($[84] !== t) {
        t44 = t("partners.title");
        $[84] = t;
        $[85] = t44;
    } else {
        t44 = $[85];
    }
    let t45;
    if ($[86] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-gray-400 text-xs mb-6",
            children: t44
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 623,
            columnNumber: 11
        }, this);
        $[86] = t44;
        $[87] = t45;
    } else {
        t45 = $[87];
    }
    let t46;
    if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap justify-center items-center gap-8 md:gap-16",
            children: partners.map(_LandingPagePartnersMap)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 631,
            columnNumber: 11
        }, this);
        $[88] = t46;
    } else {
        t46 = $[88];
    }
    let t47;
    if ($[89] !== t45) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-10 bg-white border-y border-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-6",
                children: [
                    t45,
                    t46
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 638,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 638,
            columnNumber: 11
        }, this);
        $[89] = t45;
        $[90] = t47;
    } else {
        t47 = $[90];
    }
    let t48;
    if ($[91] !== t) {
        t48 = statsKeys.map({
            "LandingPage[statsKeys.map()]": (stat, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        delay: index_0 * 0.1
                    },
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-3xl md:text-4xl font-bold text-gray-900",
                            children: stat.value
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 657,
                            columnNumber: 34
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-500 mt-1",
                            children: t(stat.key)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 657,
                            columnNumber: 114
                        }, this)
                    ]
                }, stat.key, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 647,
                    columnNumber: 58
                }, this)
        }["LandingPage[statsKeys.map()]"]);
        $[91] = t;
        $[92] = t48;
    } else {
        t48 = $[92];
    }
    let t49;
    if ($[93] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-12 bg-[#fafafa] border-b border-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                    children: t48
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 666,
                    columnNumber: 116
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 666,
                columnNumber: 76
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 666,
            columnNumber: 11
        }, this);
        $[93] = t48;
        $[94] = t49;
    } else {
        t49 = $[94];
    }
    let t50;
    if ($[95] !== t) {
        t50 = t("features.title");
        $[95] = t;
        $[96] = t50;
    } else {
        t50 = $[96];
    }
    let t51;
    if ($[97] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl md:text-3xl font-semibold text-gray-900 mb-3",
            children: t50
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 682,
            columnNumber: 11
        }, this);
        $[97] = t50;
        $[98] = t51;
    } else {
        t51 = $[98];
    }
    let t52;
    if ($[99] !== t) {
        t52 = t("features.subtitle");
        $[99] = t;
        $[100] = t52;
    } else {
        t52 = $[100];
    }
    let t53;
    if ($[101] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500",
            children: t52
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 698,
            columnNumber: 11
        }, this);
        $[101] = t52;
        $[102] = t53;
    } else {
        t53 = $[102];
    }
    let t54;
    if ($[103] !== t51 || $[104] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12",
            children: [
                t51,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 706,
            columnNumber: 11
        }, this);
        $[103] = t51;
        $[104] = t53;
        $[105] = t54;
    } else {
        t54 = $[105];
    }
    let t55;
    if ($[106] !== t) {
        t55 = featuresKeys.map({
            "LandingPage[featuresKeys.map()]": (feature, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        delay: index_1 * 0.1
                    },
                    className: "bg-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                className: "w-6 h-6 text-orange-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 726,
                                columnNumber: 214
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 726,
                            columnNumber: 125
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-gray-900 mb-2",
                            children: t(feature.titleKey)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 726,
                            columnNumber: 272
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-sm leading-relaxed",
                            children: t(feature.descKey)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 726,
                            columnNumber: 355
                        }, this)
                    ]
                }, feature.titleKey, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 716,
                    columnNumber: 64
                }, this)
        }["LandingPage[featuresKeys.map()]"]);
        $[106] = t;
        $[107] = t55;
    } else {
        t55 = $[107];
    }
    let t56;
    if ($[108] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-3 gap-8",
            children: t55
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 735,
            columnNumber: 11
        }, this);
        $[108] = t55;
        $[109] = t56;
    } else {
        t56 = $[109];
    }
    let t57;
    if ($[110] !== t54 || $[111] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "features",
            className: "py-20 bg-[#fafafa]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-6",
                children: [
                    t54,
                    t56
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 743,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 743,
            columnNumber: 11
        }, this);
        $[110] = t54;
        $[111] = t56;
        $[112] = t57;
    } else {
        t57 = $[112];
    }
    let t58;
    let t59;
    let t60;
    if ($[113] === Symbol.for("react.memo_cache_sentinel")) {
        t58 = {
            opacity: 0,
            x: -20
        };
        t59 = {
            opacity: 1,
            x: 0
        };
        t60 = {
            once: true
        };
        $[113] = t58;
        $[114] = t59;
        $[115] = t60;
    } else {
        t58 = $[113];
        t59 = $[114];
        t60 = $[115];
    }
    let t61;
    if ($[116] !== t) {
        t61 = t("security.title");
        $[116] = t;
        $[117] = t61;
    } else {
        t61 = $[117];
    }
    let t62;
    if ($[118] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl md:text-3xl font-semibold text-gray-900 mb-4",
            children: t61
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 783,
            columnNumber: 11
        }, this);
        $[118] = t61;
        $[119] = t62;
    } else {
        t62 = $[119];
    }
    let t63;
    if ($[120] !== t) {
        t63 = t("security.subtitle");
        $[120] = t;
        $[121] = t63;
    } else {
        t63 = $[121];
    }
    let t64;
    if ($[122] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 mb-8 leading-relaxed",
            children: t63
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 799,
            columnNumber: 11
        }, this);
        $[122] = t63;
        $[123] = t64;
    } else {
        t64 = $[123];
    }
    let t65;
    if ($[124] !== t) {
        t65 = detailedFeaturesKeys.map({
            "LandingPage[detailedFeaturesKeys.map()]": (feature_0, index_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        delay: index_2 * 0.1
                    },
                    className: "flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature_0.icon, {
                                className: "w-5 h-5 text-orange-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 818,
                                columnNumber: 131
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 818,
                            columnNumber: 33
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-gray-900 mb-1",
                                    children: t(feature_0.titleKey)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 818,
                                    columnNumber: 196
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-sm",
                                    children: t(feature_0.descKey)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 818,
                                    columnNumber: 273
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 818,
                            columnNumber: 191
                        }, this)
                    ]
                }, feature_0.titleKey, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 808,
                    columnNumber: 74
                }, this)
        }["LandingPage[detailedFeaturesKeys.map()]"]);
        $[124] = t;
        $[125] = t65;
    } else {
        t65 = $[125];
    }
    let t66;
    if ($[126] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: t65
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 827,
            columnNumber: 11
        }, this);
        $[126] = t65;
        $[127] = t66;
    } else {
        t66 = $[127];
    }
    let t67;
    if ($[128] !== t62 || $[129] !== t64 || $[130] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t58,
            whileInView: t59,
            viewport: t60,
            children: [
                t62,
                t64,
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 835,
            columnNumber: 11
        }, this);
        $[128] = t62;
        $[129] = t64;
        $[130] = t66;
        $[131] = t67;
    } else {
        t67 = $[131];
    }
    let t68;
    let t69;
    let t70;
    if ($[132] === Symbol.for("react.memo_cache_sentinel")) {
        t68 = {
            opacity: 0,
            x: 20
        };
        t69 = {
            opacity: 1,
            x: 0
        };
        t70 = {
            once: true
        };
        $[132] = t68;
        $[133] = t69;
        $[134] = t70;
    } else {
        t68 = $[132];
        t69 = $[133];
        t70 = $[134];
    }
    let t71;
    if ($[135] === Symbol.for("react.memo_cache_sentinel")) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                className: "w-12 h-12 text-orange-500"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 868,
                columnNumber: 115
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 868,
            columnNumber: 11
        }, this);
        $[135] = t71;
    } else {
        t71 = $[135];
    }
    let t72;
    if ($[136] !== t) {
        t72 = t("nav.security");
        $[136] = t;
        $[137] = t72;
    } else {
        t72 = $[137];
    }
    let t73;
    if ($[138] !== t72) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 font-medium",
            children: [
                "TEE ",
                t72
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 883,
            columnNumber: 11
        }, this);
        $[138] = t72;
        $[139] = t73;
    } else {
        t73 = $[139];
    }
    let t74;
    if ($[140] === Symbol.for("react.memo_cache_sentinel")) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-sm mt-1",
            children: "Hardware Security"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 891,
            columnNumber: 11
        }, this);
        $[140] = t74;
    } else {
        t74 = $[140];
    }
    let t75;
    if ($[141] !== t73) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t68,
            whileInView: t69,
            viewport: t70,
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-square bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        t71,
                        t73,
                        t74
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 898,
                    columnNumber: 214
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 898,
                columnNumber: 91
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 898,
            columnNumber: 11
        }, this);
        $[141] = t73;
        $[142] = t75;
    } else {
        t75 = $[142];
    }
    let t76;
    if ($[143] !== t67 || $[144] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "security",
            className: "py-20 bg-white border-t border-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-12 items-center",
                    children: [
                        t67,
                        t75
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 906,
                    columnNumber: 126
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 906,
                columnNumber: 86
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 906,
            columnNumber: 11
        }, this);
        $[143] = t67;
        $[144] = t75;
        $[145] = t76;
    } else {
        t76 = $[145];
    }
    let t77;
    let t78;
    let t79;
    if ($[146] === Symbol.for("react.memo_cache_sentinel")) {
        t77 = {
            opacity: 0,
            y: 20
        };
        t78 = {
            opacity: 1,
            y: 0
        };
        t79 = {
            once: true
        };
        $[146] = t77;
        $[147] = t78;
        $[148] = t79;
    } else {
        t77 = $[146];
        t78 = $[147];
        t79 = $[148];
    }
    let t80;
    if ($[149] !== t) {
        t80 = t("usage.title");
        $[149] = t;
        $[150] = t80;
    } else {
        t80 = $[150];
    }
    let t81;
    if ($[151] !== t80) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl md:text-3xl font-semibold text-gray-900 mb-4",
            children: t80
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 946,
            columnNumber: 11
        }, this);
        $[151] = t80;
        $[152] = t81;
    } else {
        t81 = $[152];
    }
    let t82;
    if ($[153] !== t) {
        t82 = t("usage.subtitle");
        $[153] = t;
        $[154] = t82;
    } else {
        t82 = $[154];
    }
    let t83;
    if ($[155] !== t82) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 mb-8 leading-relaxed",
            children: t82
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 962,
            columnNumber: 11
        }, this);
        $[155] = t82;
        $[156] = t83;
    } else {
        t83 = $[156];
    }
    let t84;
    if ($[157] === Symbol.for("react.memo_cache_sentinel")) {
        t84 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                className: "w-4 h-4 text-orange-500"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 970,
                columnNumber: 114
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 970,
            columnNumber: 11
        }, this);
        $[157] = t84;
    } else {
        t84 = $[157];
    }
    let t85;
    if ($[158] !== t) {
        t85 = t("usage.create");
        $[158] = t;
        $[159] = t85;
    } else {
        t85 = $[159];
    }
    let t86;
    if ($[160] !== t85) {
        t86 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-gray-900 font-medium text-sm mb-0.5",
            children: t85
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 985,
            columnNumber: 11
        }, this);
        $[160] = t85;
        $[161] = t86;
    } else {
        t86 = $[161];
    }
    let t87;
    if ($[162] !== t) {
        t87 = t("usage.create");
        $[162] = t;
        $[163] = t87;
    } else {
        t87 = $[163];
    }
    let t88;
    if ($[164] !== t87) {
        t88 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
            className: "text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded",
            children: [
                "@openclaw ",
                t87
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1001,
            columnNumber: 11
        }, this);
        $[164] = t87;
        $[165] = t88;
    } else {
        t88 = $[165];
    }
    let t89;
    if ($[166] !== t86 || $[167] !== t88) {
        t89 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                t84,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t86,
                        t88
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1009,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1009,
            columnNumber: 11
        }, this);
        $[166] = t86;
        $[167] = t88;
        $[168] = t89;
    } else {
        t89 = $[168];
    }
    let t90;
    if ($[169] === Symbol.for("react.memo_cache_sentinel")) {
        t90 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                className: "w-4 h-4 text-orange-500"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1018,
                columnNumber: 114
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1018,
            columnNumber: 11
        }, this);
        $[169] = t90;
    } else {
        t90 = $[169];
    }
    let t91;
    if ($[170] !== t) {
        t91 = t("usage.balance");
        $[170] = t;
        $[171] = t91;
    } else {
        t91 = $[171];
    }
    let t92;
    if ($[172] !== t91) {
        t92 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-gray-900 font-medium text-sm mb-0.5",
            children: t91
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1033,
            columnNumber: 11
        }, this);
        $[172] = t91;
        $[173] = t92;
    } else {
        t92 = $[173];
    }
    let t93;
    if ($[174] !== t) {
        t93 = t("usage.balance");
        $[174] = t;
        $[175] = t93;
    } else {
        t93 = $[175];
    }
    let t94;
    if ($[176] !== t93) {
        t94 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
            className: "text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded",
            children: [
                "@openclaw ",
                t93
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1049,
            columnNumber: 11
        }, this);
        $[176] = t93;
        $[177] = t94;
    } else {
        t94 = $[177];
    }
    let t95;
    if ($[178] !== t92 || $[179] !== t94) {
        t95 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                t90,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t92,
                        t94
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1057,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1057,
            columnNumber: 11
        }, this);
        $[178] = t92;
        $[179] = t94;
        $[180] = t95;
    } else {
        t95 = $[180];
    }
    let t96;
    if ($[181] === Symbol.for("react.memo_cache_sentinel")) {
        t96 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                className: "w-4 h-4 text-orange-500"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1066,
                columnNumber: 114
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1066,
            columnNumber: 11
        }, this);
        $[181] = t96;
    } else {
        t96 = $[181];
    }
    let t97;
    if ($[182] !== t) {
        t97 = t("usage.send");
        $[182] = t;
        $[183] = t97;
    } else {
        t97 = $[183];
    }
    let t98;
    if ($[184] !== t97) {
        t98 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-gray-900 font-medium text-sm mb-0.5",
            children: t97
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1081,
            columnNumber: 11
        }, this);
        $[184] = t97;
        $[185] = t98;
    } else {
        t98 = $[185];
    }
    let t99;
    if ($[186] !== t) {
        t99 = t("usage.send");
        $[186] = t;
        $[187] = t99;
    } else {
        t99 = $[187];
    }
    let t100;
    if ($[188] !== t99) {
        t100 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
            className: "text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded",
            children: [
                "@openclaw ",
                t99,
                " 0.1 ETH..."
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1097,
            columnNumber: 12
        }, this);
        $[188] = t99;
        $[189] = t100;
    } else {
        t100 = $[189];
    }
    let t101;
    if ($[190] !== t100 || $[191] !== t98) {
        t101 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                t96,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t98,
                        t100
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1105,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1105,
            columnNumber: 12
        }, this);
        $[190] = t100;
        $[191] = t98;
        $[192] = t101;
    } else {
        t101 = $[192];
    }
    let t102;
    if ($[193] !== t101 || $[194] !== t89 || $[195] !== t95) {
        t102 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t89,
                t95,
                t101
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1114,
            columnNumber: 12
        }, this);
        $[193] = t101;
        $[194] = t89;
        $[195] = t95;
        $[196] = t102;
    } else {
        t102 = $[196];
    }
    let t103;
    if ($[197] !== t102 || $[198] !== t81 || $[199] !== t83) {
        t103 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t77,
            whileInView: t78,
            viewport: t79,
            children: [
                t81,
                t83,
                t102
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1124,
            columnNumber: 12
        }, this);
        $[197] = t102;
        $[198] = t81;
        $[199] = t83;
        $[200] = t103;
    } else {
        t103 = $[200];
    }
    let t104;
    let t105;
    let t106;
    let t107;
    if ($[201] === Symbol.for("react.memo_cache_sentinel")) {
        t104 = {
            opacity: 0,
            y: 20
        };
        t105 = {
            opacity: 1,
            y: 0
        };
        t106 = {
            once: true
        };
        t107 = {
            delay: 0.1
        };
        $[201] = t104;
        $[202] = t105;
        $[203] = t106;
        $[204] = t107;
    } else {
        t104 = $[201];
        t105 = $[202];
        t106 = $[203];
        t107 = $[204];
    }
    let t108;
    if ($[205] === Symbol.for("react.memo_cache_sentinel")) {
        t108 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2.5 h-2.5 rounded-full bg-gray-200"
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1163,
                    columnNumber: 97
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2.5 h-2.5 rounded-full bg-gray-200"
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1163,
                    columnNumber: 153
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2.5 h-2.5 rounded-full bg-gray-200"
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1163,
                    columnNumber: 209
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-400 text-xs ml-2",
                    children: "OpenClaw"
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1163,
                    columnNumber: 265
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1163,
            columnNumber: 12
        }, this);
        $[205] = t108;
    } else {
        t108 = $[205];
    }
    let t109;
    if ($[206] === Symbol.for("react.memo_cache_sentinel")) {
        t109 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs",
            children: "👤"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1170,
            columnNumber: 12
        }, this);
        $[206] = t109;
    } else {
        t109 = $[206];
    }
    let t110;
    if ($[207] !== t) {
        t110 = t("usage.create");
        $[207] = t;
        $[208] = t110;
    } else {
        t110 = $[208];
    }
    let t111;
    if ($[209] !== t110) {
        t111 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-3",
            children: [
                t109,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl rounded-tl-sm px-3 py-2 text-gray-700 text-sm shadow-sm border border-gray-100",
                    children: [
                        "@openclaw ",
                        t110
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1185,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1185,
            columnNumber: 12
        }, this);
        $[209] = t110;
        $[210] = t111;
    } else {
        t111 = $[210];
    }
    let t112;
    if ($[211] === Symbol.for("react.memo_cache_sentinel")) {
        t112 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                className: "w-3.5 h-3.5 text-white"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1193,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1193,
            columnNumber: 12
        }, this);
        $[211] = t112;
    } else {
        t112 = $[211];
    }
    let t113;
    if ($[212] !== t) {
        t113 = t("usage.create");
        $[212] = t;
        $[213] = t113;
    } else {
        t113 = $[213];
    }
    let t114;
    if ($[214] !== t) {
        t114 = t("hero.copied");
        $[214] = t;
        $[215] = t114;
    } else {
        t114 = $[215];
    }
    let t115;
    if ($[216] !== t113 || $[217] !== t114) {
        t115 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "✅ ",
                t113,
                " ",
                t114,
                "!"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1216,
            columnNumber: 12
        }, this);
        $[216] = t113;
        $[217] = t114;
        $[218] = t115;
    } else {
        t115 = $[218];
    }
    let t116;
    if ($[219] !== t) {
        t116 = t("usage.balance");
        $[219] = t;
        $[220] = t116;
    } else {
        t116 = $[220];
    }
    let t117;
    if ($[221] === Symbol.for("react.memo_cache_sentinel")) {
        t117 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1233,
            columnNumber: 12
        }, this);
        $[221] = t117;
    } else {
        t117 = $[221];
    }
    let t118;
    if ($[222] !== t116) {
        t118 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-mono text-xs text-gray-400",
            children: [
                t116,
                ": 0x7a2f...9c4d",
                t117,
                "UID: claw_wallet_abc123"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1240,
            columnNumber: 12
        }, this);
        $[222] = t116;
        $[223] = t118;
    } else {
        t118 = $[223];
    }
    let t119;
    if ($[224] !== t115 || $[225] !== t118) {
        t119 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-3",
            children: [
                t112,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl rounded-tl-sm px-3 py-2 text-gray-700 text-sm shadow-sm border border-gray-100 space-y-1",
                    children: [
                        t115,
                        t118
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1248,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1248,
            columnNumber: 12
        }, this);
        $[224] = t115;
        $[225] = t118;
        $[226] = t119;
    } else {
        t119 = $[226];
    }
    let t120;
    if ($[227] !== t111 || $[228] !== t119) {
        t120 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t104,
            whileInView: t105,
            viewport: t106,
            transition: t107,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden",
                children: [
                    t108,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 space-y-4",
                        children: [
                            t111,
                            t119
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 1257,
                        columnNumber: 177
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1257,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1257,
            columnNumber: 12
        }, this);
        $[227] = t111;
        $[228] = t119;
        $[229] = t120;
    } else {
        t120 = $[229];
    }
    let t121;
    if ($[230] !== t103 || $[231] !== t120) {
        t121 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 bg-[#fafafa] border-t border-gray-100 min-h-screen flex items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-6 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-12 items-center",
                    children: [
                        t103,
                        t120
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1266,
                    columnNumber: 155
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1266,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1266,
            columnNumber: 12
        }, this);
        $[230] = t103;
        $[231] = t120;
        $[232] = t121;
    } else {
        t121 = $[232];
    }
    let t122;
    if ($[233] === Symbol.for("react.memo_cache_sentinel")) {
        t122 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            className: "w-4 h-4 text-orange-500"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1275,
            columnNumber: 12
        }, this);
        $[233] = t122;
    } else {
        t122 = $[233];
    }
    let t123;
    if ($[234] !== t) {
        t123 = t("testimonials.badge");
        $[234] = t;
        $[235] = t123;
    } else {
        t123 = $[235];
    }
    let t124;
    if ($[236] !== t123) {
        t124 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-4",
            children: [
                t122,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-orange-600 text-sm font-medium",
                    children: t123
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1290,
                    columnNumber: 134
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1290,
            columnNumber: 12
        }, this);
        $[236] = t123;
        $[237] = t124;
    } else {
        t124 = $[237];
    }
    let t125;
    if ($[238] !== t) {
        t125 = t("testimonials.title");
        $[238] = t;
        $[239] = t125;
    } else {
        t125 = $[239];
    }
    let t126;
    if ($[240] !== t125) {
        t126 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl md:text-3xl font-semibold text-gray-900 mb-3",
            children: t125
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1306,
            columnNumber: 12
        }, this);
        $[240] = t125;
        $[241] = t126;
    } else {
        t126 = $[241];
    }
    let t127;
    if ($[242] !== t) {
        t127 = t("testimonials.subtitle");
        $[242] = t;
        $[243] = t127;
    } else {
        t127 = $[243];
    }
    let t128;
    if ($[244] !== t127) {
        t128 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500",
            children: t127
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1322,
            columnNumber: 12
        }, this);
        $[244] = t127;
        $[245] = t128;
    } else {
        t128 = $[245];
    }
    let t129;
    if ($[246] !== t124 || $[247] !== t126 || $[248] !== t128) {
        t129 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12",
            children: [
                t124,
                t126,
                t128
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1330,
            columnNumber: 12
        }, this);
        $[246] = t124;
        $[247] = t126;
        $[248] = t128;
        $[249] = t129;
    } else {
        t129 = $[249];
    }
    let t130;
    if ($[250] !== currentLang) {
        t130 = testimonials.map({
            "LandingPage[testimonials.map()]": (testimonial, index_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        delay: index_3 * 0.1
                    },
                    className: "bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-orange-200 transition-all",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 mb-4",
                            children: [
                                ...Array(testimonial.rating)
                            ].map(_LandingPageTestimonialsMapAnonymous)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 1351,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                    className: "w-8 h-8 text-orange-200 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 1351,
                                    columnNumber: 270
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm leading-relaxed",
                                    children: currentLang === "zh" ? testimonial.content : testimonial.contentEn
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 1351,
                                    columnNumber: 329
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 1351,
                            columnNumber: 237
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 pt-4 border-t border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl",
                                    children: testimonial.avatar
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 1351,
                                    columnNumber: 531
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-gray-900 text-sm",
                                            children: currentLang === "zh" ? testimonial.name : testimonial.nameEn
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 1351,
                                            columnNumber: 590
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-xs",
                                            children: [
                                                currentLang === "zh" ? testimonial.role : testimonial.roleEn,
                                                " · ",
                                                testimonial.company
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 1351,
                                            columnNumber: 707
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 1351,
                                    columnNumber: 585
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 1351,
                            columnNumber: 460
                        }, this)
                    ]
                }, testimonial.name, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1341,
                    columnNumber: 68
                }, this)
        }["LandingPage[testimonials.map()]"]);
        $[250] = currentLang;
        $[251] = t130;
    } else {
        t130 = $[251];
    }
    let t131;
    if ($[252] !== t130) {
        t131 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-3 gap-6",
            children: t130
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1360,
            columnNumber: 12
        }, this);
        $[252] = t130;
        $[253] = t131;
    } else {
        t131 = $[253];
    }
    let t132;
    if ($[254] !== t129 || $[255] !== t131) {
        t132 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "testimonials",
            className: "py-20 bg-white border-t border-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-6",
                children: [
                    t129,
                    t131
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1368,
                columnNumber: 91
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1368,
            columnNumber: 12
        }, this);
        $[254] = t129;
        $[255] = t131;
        $[256] = t132;
    } else {
        t132 = $[256];
    }
    let t133;
    if ($[257] !== t) {
        t133 = t("faq.title");
        $[257] = t;
        $[258] = t133;
    } else {
        t133 = $[258];
    }
    let t134;
    if ($[259] !== t133) {
        t134 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl md:text-3xl font-semibold text-gray-900 mb-3",
            children: t133
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1385,
            columnNumber: 12
        }, this);
        $[259] = t133;
        $[260] = t134;
    } else {
        t134 = $[260];
    }
    let t135;
    if ($[261] !== t) {
        t135 = t("faq.subtitle");
        $[261] = t;
        $[262] = t135;
    } else {
        t135 = $[262];
    }
    let t136;
    if ($[263] !== t135) {
        t136 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500",
            children: t135
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1401,
            columnNumber: 12
        }, this);
        $[263] = t135;
        $[264] = t136;
    } else {
        t136 = $[264];
    }
    let t137;
    if ($[265] !== t134 || $[266] !== t136) {
        t137 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12",
            children: [
                t134,
                t136
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1409,
            columnNumber: 12
        }, this);
        $[265] = t134;
        $[266] = t136;
        $[267] = t137;
    } else {
        t137 = $[267];
    }
    let t138;
    if ($[268] !== t) {
        t138 = faqKeys.map({
            "LandingPage[faqKeys.map()]": (faq, index_4)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQItem, {
                    question: t(faq.qKey),
                    answer: t(faq.aKey)
                }, index_4, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1419,
                    columnNumber: 55
                }, this)
        }["LandingPage[faqKeys.map()]"]);
        $[268] = t;
        $[269] = t138;
    } else {
        t138 = $[269];
    }
    let t139;
    if ($[270] !== t138) {
        t139 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-0",
            children: t138
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1428,
            columnNumber: 12
        }, this);
        $[270] = t138;
        $[271] = t139;
    } else {
        t139 = $[271];
    }
    let t140;
    if ($[272] !== t137 || $[273] !== t139) {
        t140 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "faq",
            className: "py-20 bg-[#fafafa] border-t border-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto px-6",
                children: [
                    t137,
                    t139
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1436,
                columnNumber: 86
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1436,
            columnNumber: 12
        }, this);
        $[272] = t137;
        $[273] = t139;
        $[274] = t140;
    } else {
        t140 = $[274];
    }
    let t141;
    let t142;
    let t143;
    if ($[275] === Symbol.for("react.memo_cache_sentinel")) {
        t141 = {
            opacity: 0,
            y: 20
        };
        t142 = {
            opacity: 1,
            y: 0
        };
        t143 = {
            once: true
        };
        $[275] = t141;
        $[276] = t142;
        $[277] = t143;
    } else {
        t141 = $[275];
        t142 = $[276];
        t143 = $[277];
    }
    let t144;
    if ($[278] === Symbol.for("react.memo_cache_sentinel")) {
        t144 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                className: "w-8 h-8 text-orange-500"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1468,
                columnNumber: 110
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1468,
            columnNumber: 12
        }, this);
        $[278] = t144;
    } else {
        t144 = $[278];
    }
    let t145;
    if ($[279] !== t) {
        t145 = t("cta.title");
        $[279] = t;
        $[280] = t145;
    } else {
        t145 = $[280];
    }
    let t146;
    if ($[281] !== t145) {
        t146 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl md:text-3xl font-semibold text-gray-900 mb-3",
            children: t145
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1483,
            columnNumber: 12
        }, this);
        $[281] = t145;
        $[282] = t146;
    } else {
        t146 = $[282];
    }
    let t147;
    if ($[283] !== t) {
        t147 = t("cta.subtitle");
        $[283] = t;
        $[284] = t147;
    } else {
        t147 = $[284];
    }
    let t148;
    if ($[285] !== t147) {
        t148 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 mb-6 max-w-md mx-auto",
            children: t147
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1499,
            columnNumber: 12
        }, this);
        $[285] = t147;
        $[286] = t148;
    } else {
        t148 = $[286];
    }
    let t149;
    if ($[287] === Symbol.for("react.memo_cache_sentinel")) {
        t149 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
            className: "text-sm text-gray-300 font-mono px-4",
            children: installCommand
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1507,
            columnNumber: 12
        }, this);
        $[287] = t149;
    } else {
        t149 = $[287];
    }
    const t150 = `flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${copied ? "bg-green-500 text-white" : "bg-white text-gray-900 hover:bg-gray-100"}`;
    let t151;
    if ($[288] !== copied || $[289] !== t) {
        t151 = copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1515,
                    columnNumber: 23
                }, this),
                t("hero.copied")
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1515,
                    columnNumber: 78
                }, this),
                t("hero.copyBtn")
            ]
        }, void 0, true);
        $[288] = copied;
        $[289] = t;
        $[290] = t151;
    } else {
        t151 = $[290];
    }
    let t152;
    if ($[291] !== t150 || $[292] !== t151) {
        t152 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center gap-2 px-2 py-2 bg-gray-900 rounded-2xl border border-gray-800 shadow-xl mb-6",
            children: [
                t149,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleCopy,
                    className: t150,
                    children: t151
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1524,
                    columnNumber: 138
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1524,
            columnNumber: 12
        }, this);
        $[291] = t150;
        $[292] = t151;
        $[293] = t152;
    } else {
        t152 = $[293];
    }
    let t153;
    if ($[294] !== t) {
        t153 = t("cta.footer");
        $[294] = t;
        $[295] = t153;
    } else {
        t153 = $[295];
    }
    let t154;
    if ($[296] !== t153) {
        t154 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-sm",
            children: t153
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1541,
            columnNumber: 12
        }, this);
        $[296] = t153;
        $[297] = t154;
    } else {
        t154 = $[297];
    }
    let t155;
    if ($[298] !== t146 || $[299] !== t148 || $[300] !== t152 || $[301] !== t154) {
        t155 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "install",
            className: "py-20 bg-[#fafafa] border-t border-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t141,
                    whileInView: t142,
                    viewport: t143,
                    className: "bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg",
                    children: [
                        t144,
                        t146,
                        t148,
                        t152,
                        t154
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1549,
                    columnNumber: 142
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1549,
                columnNumber: 90
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1549,
            columnNumber: 12
        }, this);
        $[298] = t146;
        $[299] = t148;
        $[300] = t152;
        $[301] = t154;
        $[302] = t155;
    } else {
        t155 = $[302];
    }
    let t156;
    if ($[303] === Symbol.for("react.memo_cache_sentinel")) {
        t156 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-6 h-6 rounded-md overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/claw.png",
                        alt: "ClawWallet",
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 1560,
                        columnNumber: 105
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1560,
                    columnNumber: 53
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-600 text-sm",
                    children: "Claw Wallet"
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1560,
                    columnNumber: 190
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1560,
            columnNumber: 12
        }, this);
        $[303] = t156;
    } else {
        t156 = $[303];
    }
    let t157;
    if ($[304] !== t) {
        t157 = t("footer.copyright");
        $[304] = t;
        $[305] = t157;
    } else {
        t157 = $[305];
    }
    let t158;
    if ($[306] !== t157) {
        t158 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "py-8 border-t border-gray-100 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row items-center justify-between gap-4",
                    children: [
                        t156,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-xs",
                            children: t157
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 1575,
                            columnNumber: 195
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1575,
                    columnNumber: 111
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1575,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1575,
            columnNumber: 12
        }, this);
        $[306] = t157;
        $[307] = t158;
    } else {
        t158 = $[307];
    }
    let t159;
    if ($[308] !== t121 || $[309] !== t132 || $[310] !== t140 || $[311] !== t155 || $[312] !== t158 || $[313] !== t19 || $[314] !== t43 || $[315] !== t47 || $[316] !== t49 || $[317] !== t57 || $[318] !== t76) {
        t159 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#fafafa]",
            children: [
                t19,
                t43,
                t47,
                t49,
                t57,
                t76,
                t121,
                t132,
                t140,
                t155,
                t158
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1583,
            columnNumber: 12
        }, this);
        $[308] = t121;
        $[309] = t132;
        $[310] = t140;
        $[311] = t155;
        $[312] = t158;
        $[313] = t19;
        $[314] = t43;
        $[315] = t47;
        $[316] = t49;
        $[317] = t57;
        $[318] = t76;
        $[319] = t159;
    } else {
        t159 = $[319];
    }
    return t159;
}
_s1(LandingPage, "16RCqIaEL+sNf4J1IrnrS8jOo8I=");
_c1 = LandingPage;
function _LandingPageTestimonialsMapAnonymous(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
        className: "w-4 h-4 fill-orange-400 text-orange-400"
    }, i, false, {
        fileName: "[project]/src/app/landingpage/page.tsx",
        lineNumber: 1602,
        columnNumber: 10
    }, this);
}
function _LandingPagePartnersMap(partner, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: 0.5 + index * 0.1
        },
        className: "flex flex-col items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: partner.logoPath,
                    alt: partner.name,
                    className: "w-full h-full object-contain"
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1613,
                    columnNumber: 208
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1613,
                columnNumber: 109
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium text-xs tracking-wide",
                children: partner.name
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1613,
                columnNumber: 304
            }, this)
        ]
    }, partner.name, true, {
        fileName: "[project]/src/app/landingpage/page.tsx",
        lineNumber: 1605,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "FAQItem");
__turbopack_context__.k.register(_c1, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_landingpage_1152b1bf._.js.map