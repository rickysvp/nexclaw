module.exports = [
"[project]/src/app/landingpage/i18n.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        mainTitle: {
            zh: '专属Agent的安全加密钱包',
            en: 'Secure Crypto Wallet for Your Agent',
            ja: 'Agent専用の安全な暗号ウォレット',
            ko: 'Agent를 위한 안전한 암호화폐 지갑',
            fr: 'Portefeuille Crypto Sécurisé pour Votre Agent',
            de: 'Sichere Krypto-Wallet für Ihren Agenten',
            es: 'Cartera Cripto Segura para tu Agente'
        },
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
            zh: '一句话，为你的OpenClaw部署安全的无私钥多链钱包，确保你的加密资产被安全使用。',
            en: 'One line to deploy a secure keyless multi-chain wallet for your OpenClaw, ensuring your crypto assets are used safely.',
            ja: '一言で、OpenClaw用の安全なキーレスマルチチェーンウォレットをデプロイし、暗号資産の安全な使用を確保。',
            ko: '한마디로, OpenClaw를 위한 안전한 키리스 멀티체인 지갑을 배포하고 암호화폐 자산의 안전한 사용을 보장하세요.',
            fr: 'Une phrase pour déployer un portefeuille multi-chaînes sécurisé sans clé pour votre OpenClaw, garantissant une utilisation sûre de vos actifs crypto.',
            de: 'Ein Satz, um eine sichere schlüssellose Multi-Chain-Wallet für Ihren OpenClaw bereitzustellen und sicherzustellen, dass Ihre Krypto-Vermögenswerte sicher genutzt werden.',
            es: 'Una frase para implementar una cartera multi-cadena segura sin clave para tu OpenClaw, asegurando que tus activos cripto se usen de forma segura.'
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
        },
        highlight: {
            zh: '一键安装，即刻使用',
            en: 'One-click install, ready to use',
            ja: 'ワンクリックインストール、すぐに使用可能',
            ko: '원클릭 설치, 즉시 사용',
            fr: 'Installation en un clic, prêt à utiliser',
            de: 'Ein-Klick-Installation, sofort einsatzbereit',
            es: 'Instalación con un clic, listo para usar'
        },
        features: {
            tee: {
                zh: 'TEE 安全架构',
                en: 'TEE Security',
                ja: 'TEE セキュリティ',
                ko: 'TEE 보안',
                fr: 'Sécurité TEE',
                de: 'TEE-Sicherheit',
                es: 'Seguridad TEE'
            },
            multichain: {
                zh: '多链支持',
                en: 'Multi-chain',
                ja: 'マルチチェーン',
                ko: '멀티체인',
                fr: 'Multi-chaîne',
                de: 'Multi-Chain',
                es: 'Multi-cadena'
            },
            zeroconf: {
                zh: '零配置',
                en: 'Zero Config',
                ja: 'ゼロ構成',
                ko: '제로 구성',
                fr: 'Zéro Configuration',
                de: 'Keine Konfiguration',
                es: 'Cero Configuración'
            }
        }
    },
    // Install Tabs
    installTabs: {
        cli: {
            zh: '我是 Human',
            en: 'I am Human',
            ja: 'Human です',
            ko: 'Human 입니다',
            fr: 'Je suis Humain',
            de: 'Ich bin Human',
            es: 'Soy Humano'
        },
        openclaw: {
            zh: '我是 Agent',
            en: 'I am Agent',
            ja: 'Agent です',
            ko: 'Agent 입니다',
            fr: 'Je suis Agent',
            de: 'Ich bin Agent',
            es: 'Soy Agente'
        },
        cliDesc: {
            zh: '在终端运行以下命令安装 ClawWallet',
            en: 'Run the following command in terminal to install ClawWallet',
            ja: 'ターミナルで以下のコマンドを実行して ClawWallet をインストール',
            ko: '터미널에서 다음 명령을 실행하여 ClawWallet 설치',
            fr: 'Exécutez la commande suivante dans le terminal pour installer ClawWallet',
            de: 'Führen Sie den folgenden Befehl im Terminal aus, um ClawWallet zu installieren',
            es: 'Ejecute el siguiente comando en la terminal para instalar ClawWallet'
        },
        openclawDesc: {
            zh: '将此提示发送给你的 Agent，以安装 ClawWallet',
            en: 'Send this prompt to your Agent to install ClawWallet',
            ja: 'このプロンプトを Agent に送信して ClawWallet をインストール',
            ko: '이 프롬프트를 Agent에게 본내어 ClawWallet 설치',
            fr: 'Envoyez cette invite à votre Agent pour installer ClawWallet',
            de: 'Senden Sie diese Eingabeaufforderung an Ihren Agenten, um ClawWallet zu installieren',
            es: 'Envíe este mensaje a su Agente para instalar ClawWallet'
        },
        copy: {
            zh: '复制',
            en: 'Copy',
            ja: 'コピー',
            ko: '복사',
            fr: 'Copier',
            de: 'Kopieren',
            es: 'Copiar'
        },
        runInTerminal: {
            zh: '在终端运行',
            en: 'Run in terminal',
            ja: 'ターミナルで実行',
            ko: '터미널에서 실행',
            fr: 'Exécuter dans le terminal',
            de: 'Im Terminal ausführen',
            es: 'Ejecutar en terminal'
        },
        sendToOpenClaw: {
            zh: '发送给 OpenClaw',
            en: 'Send to OpenClaw',
            ja: 'OpenClaw に送信',
            ko: 'OpenClaw에 별내기',
            fr: 'Envoyer à OpenClaw',
            de: 'An OpenClaw senden',
            es: 'Enviar a OpenClaw'
        },
        openClawCommand: {
            zh: '阅读 clawwallet.cc/skill.md ，并部署钱包',
            en: 'Read clawwallet.cc/skill.md and deploy wallet',
            ja: 'clawwallet.cc/skill.md を読み、ウォレットをデプロイ',
            ko: 'clawwallet.cc/skill.md를 읽고 지갑 배포',
            fr: 'Lisez clawwallet.cc/skill.md et déployez le portefeuille',
            de: 'Lesen Sie clawwallet.cc/skill.md und stellen Sie die Wallet bereit',
            es: 'Lee clawwallet.cc/skill.md e implementa la cartera'
        },
        noRegistration: {
            zh: '无需注册，复制后即可使用',
            en: 'No registration required, use immediately after copying',
            ja: '登録不要、コピー後すぐに使用可能',
            ko: '등록 불필요, 복사 후 즉시 사용',
            fr: 'Aucune inscription requise, utilisable immédiatement après copie',
            de: 'Keine Registrierung erforderlich, sofort nach dem Kopieren verwendbar',
            es: 'Sin registro requerido, úsalo inmediatamente después de copiar'
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
        teeTitle: {
            zh: 'TEE 可信执行环境',
            en: 'TEE Trusted Execution Environment',
            ja: 'TEE 信頼実行環境',
            ko: 'TEE 신뢰 실행 환경',
            fr: 'Environnement d\'Exécution de Confiance TEE',
            de: 'TEE Trusted Execution Environment',
            es: 'Entorno de Ejecución Confiable TEE'
        },
        teeSubtitle: {
            zh: 'Hardware-Level Security',
            en: 'Hardware-Level Security',
            ja: 'ハードウェアレベルのセキュリティ',
            ko: '하드웨어 수준 보안',
            fr: 'Sécurité au Niveau Matériel',
            de: 'Hardware-Level-Sicherheit',
            es: 'Seguridad a Nivel de Hardware'
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
        },
        moreQuestions: {
            zh: '还有其他问题？',
            en: 'Have more questions?',
            ja: '他に質問がありますか？',
            ko: '더 많은 질문이 있으신가요?',
            fr: 'Vous avez d\'autres questions ?',
            de: 'Haben Sie weitere Fragen?',
            es: '¿Tiene más preguntas?'
        },
        contactUs: {
            zh: '联系我们',
            en: 'Contact Us',
            ja: 'お問い合わせ',
            ko: '문의하기',
            fr: 'Contactez-nous',
            de: 'Kontaktieren Sie uns',
            es: 'Contáctenos'
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
        copied: {
            zh: '已复制',
            en: 'Copied',
            ja: 'コピー済み',
            ko: '복사됨',
            fr: 'Copié',
            de: 'Kopiert',
            es: 'Copiado'
        },
        copyCommand: {
            zh: '复制命令',
            en: 'Copy Command',
            ja: 'コマンドをコピー',
            ko: '명령 복사',
            fr: 'Copier la Commande',
            de: 'Befehl Kopieren',
            es: 'Copiar Comando'
        },
        features: {
            opensource: {
                zh: '开源免费',
                en: 'Open Source',
                ja: 'オープンソース',
                ko: '오픈 소스',
                fr: 'Open Source',
                de: 'Open Source',
                es: 'Código Abierto'
            },
            noreg: {
                zh: '无需注册',
                en: 'No Registration',
                ja: '登録不要',
                ko: '등록 불필요',
                fr: 'Pas d\'Inscription',
                de: 'Keine Registrierung',
                es: 'Sin Registro'
            },
            instant: {
                zh: '即刻使用',
                en: 'Instant Access',
                ja: 'すぐに使用',
                ko: '즉시 사용',
                fr: 'Accès Instantané',
                de: 'Sofortiger Zugriff',
                es: 'Acceso Instantáneo'
            }
        },
        footer: {
            zh: '免费开始使用 · 无需信用卡 · 3 秒完成部署',
            en: 'Free to start · No credit card required · Deploy in 3 seconds',
            ja: '無料で開始 · クレジットカード不要 · 3 秒でデプロイ',
            ko: '묣료로 시작 · 신용카드 불필요 · 3초 만에 배포',
            fr: 'Gratuit pour commencer · Pas de carte de crédit requise · Déploiement en 3 secondes',
            de: 'Kostenlos starten · Keine Kreditkarte erforderlich · Bereitstellung in 3 Sekunden',
            es: 'Gratis para empezar · No se requiere tarjeta de crédito · Implementa en 3 segundos'
        }
    },
    // Agent Roles Section
    agentRoles: {
        badge: {
            zh: 'Agent 能力',
            en: 'Agent Capabilities',
            ja: 'Agent 能力',
            ko: '에이전트 기능',
            fr: 'Capacités de l\'Agent',
            de: 'Agenten-Fähigkeiten',
            es: 'Capacidades del Agente'
        },
        title: {
            zh: '一个钱包，胜任所有场景',
            en: 'One Wallet for All Scenarios',
            ja: '一つのウォレットですべてのシーンに対応',
            ko: '하나의 지갑으로 모든 상황에 대응',
            fr: 'Un Portefeuille pour Tous les Scénarios',
            de: 'Eine Wallet für Alle Szenarien',
            es: 'Una Cartera para Todos los Escenarios'
        },
        subtitle: {
            zh: '您的完整 Web3 AI 团队。从 DeFi 交易到资产管理，Claw Wallet 让 Agent 安全处理一切链上操作。',
            en: 'Your complete Web3 AI team. From DeFi trading to asset management, Claw Wallet lets Agents safely handle all on-chain operations.',
            ja: 'あなたの完全な Web3 AI チーム。DeFi 取引から資産管理まで、Claw Wallet は Agent がすべてのオンチェーン操作を安全に処理できるようにします。',
            ko: '당신의 완전한 Web3 AI 팀. DeFi 거래부터 자산 관리까지, Claw Wallet은 에이전트가 모든 온체인 작업을 안전하게 처리할 수 있게 합니다.',
            fr: 'Votre équipe IA Web3 complète. Du trading DeFi à la gestion d\'actifs, Claw Wallet permet aux Agents de gérer en toute sécurité toutes les opérations on-chain.',
            de: 'Ihr komplettes Web3 KI-Team. Vom DeFi-Trading bis zum Asset-Management lässt Claw Wallet Agenten alle On-Chain-Operationen sicher abwickeln.',
            es: 'Tu equipo completo de IA Web3. Desde el trading DeFi hasta la gestión de activos, Claw Wallet permite a los Agentes manejar de forma segura todas las operaciones on-chain.'
        },
        defiTrader: {
            title: {
                zh: 'DeFi 交易员',
                en: 'DeFi Trader',
                ja: 'DeFi トレーダー',
                ko: 'DeFi 트레이더',
                fr: 'Trader DeFi',
                de: 'DeFi-Trader',
                es: 'Trader DeFi'
            },
            desc: {
                zh: '自动执行 Swap、流动性挖矿、收益聚合，24/7 监控市场机会',
                en: 'Automatically execute swaps, liquidity mining, yield aggregation, 24/7 market monitoring',
                ja: '自動的にスワップ、流動性マイニング、収益アグリゲーションを実行、24時間365日市場を監視',
                ko: '스왑, 유동성 마이닝, 수익 집계를 자동으로 실행, 24/7 시장 모니터링',
                fr: 'Exécute automatiquement des swaps, du minage de liquidité, de l\'agrégation de rendement, surveillance du marché 24/7',
                de: 'Führt automatisch Swaps, Liquiditätsmining, Yield-Aggregation durch, 24/7 Marktüberwachung',
                es: 'Ejecuta automáticamente swaps, minería de liquidez, agregación de rendimiento, monitoreo del mercado 24/7'
            },
            tag0: {
                zh: 'DEX 交易',
                en: 'DEX Trading',
                ja: 'DEX 取引',
                ko: 'DEX 거래',
                fr: 'Trading DEX',
                de: 'DEX-Trading',
                es: 'Trading DEX'
            },
            tag1: {
                zh: '收益 farming',
                en: 'Yield Farming',
                ja: 'イールドファーミング',
                ko: '이일드 파밍',
                fr: 'Yield Farming',
                de: 'Yield-Farming',
                es: 'Yield Farming'
            },
            tag2: {
                zh: '自动复利',
                en: 'Auto-Compounding',
                ja: '自動複利',
                ko: '자동 복리',
                fr: 'Composition Automatique',
                de: 'Auto-Compounding',
                es: 'Auto-Compounding'
            }
        },
        assetManager: {
            title: {
                zh: '资产管理员',
                en: 'Asset Manager',
                ja: '資産管理者',
                ko: '자산 관리자',
                fr: 'Gestionnaire d\'Actifs',
                de: 'Asset-Manager',
                es: 'Gestor de Activos'
            },
            desc: {
                zh: '跨链资产配置、再平衡、风险监控，保持投资组合最优状态',
                en: 'Cross-chain asset allocation, rebalancing, risk monitoring, keeping portfolio in optimal condition',
                ja: 'クロスチェーン資産配分、リバランス、リスク監視、ポートフォリオを最適な状態に維持',
                ko: '크로스체인 자산 배분, 리밸런싱, 리스크 모니터링, 포트폴리오를 최적 상태로 유지',
                fr: 'Allocation d\'actifs cross-chain, rééquilibrage, surveillance des risques, maintien du portefeuille en condition optimale',
                de: 'Cross-Chain-Asset-Allokation, Rebalancing, Risikoüberwachung, Portfolio in optimalem Zustand halten',
                es: 'Asignación de activos cross-chain, reequilibrio, monitoreo de riesgos, mantener el portafolio en condición óptima'
            },
            tag0: {
                zh: '跨链桥接',
                en: 'Cross-Chain Bridge',
                ja: 'クロスチェーンブリッジ',
                ko: '크로스체인 브리지',
                fr: 'Pont Cross-Chain',
                de: 'Cross-Chain-Bridge',
                es: 'Puente Cross-Chain'
            },
            tag1: {
                zh: '资产再平衡',
                en: 'Rebalancing',
                ja: 'リバランス',
                ko: '리밸런싱',
                fr: 'Rééquilibrage',
                de: 'Rebalancing',
                es: 'Reequilibrio'
            },
            tag2: {
                zh: '风险评估',
                en: 'Risk Assessment',
                ja: 'リスク評価',
                ko: '리스크 평가',
                fr: 'Évaluation des Risques',
                de: 'Risikobewertung',
                es: 'Evaluación de Riesgos'
            }
        },
        securityAuditor: {
            title: {
                zh: '安全审计员',
                en: 'Security Auditor',
                ja: 'セキュリティ監査員',
                ko: '보안 감사원',
                fr: 'Auditeur de Sécurité',
                de: 'Sicherheitsauditor',
                es: 'Auditor de Seguridad'
            },
            desc: {
                zh: '每笔交易前自动扫描合约风险，拦截可疑操作，保护资产安全',
                en: 'Automatically scan contract risks before each transaction, intercept suspicious operations, protect asset security',
                ja: 'すべての取引前にコントラクトリスクを自動スキャンし、疑わしい操作をインターセプトし、資産の安全性を保護',
                ko: '모든 거래 전에 계약 위험을 자동으로 스캔하고, 의심스러운 작업을 차단하며, 자산 보안을 보호',
                fr: 'Scan automatique des risques de contrat avant chaque transaction, interception des opérations suspectes, protection de la sécurité des actifs',
                de: 'Automatisches Scannen von Vertragsrisiken vor jeder Transaktion, Abfangen verdächtiger Operationen, Schutz der Asset-Sicherheit',
                es: 'Escaneo automático de riesgos de contrato antes de cada transacción, interceptación de operaciones sospechosas, protección de la seguridad de activos'
            },
            tag0: {
                zh: '合约扫描',
                en: 'Contract Scan',
                ja: 'コントラクトスキャン',
                ko: '계약 스캔',
                fr: 'Scan de Contrat',
                de: 'Vertragsscan',
                es: 'Escaneo de Contrato'
            },
            tag1: {
                zh: '风险评分',
                en: 'Risk Score',
                ja: 'リスクスコア',
                ko: '리스크 점수',
                fr: 'Score de Risque',
                de: 'Risikoscore',
                es: 'Puntuación de Riesgo'
            },
            tag2: {
                zh: '异常拦截',
                en: 'Anomaly Detection',
                ja: '異常検出',
                ko: '이상 감지',
                fr: 'Détection d\'Anomalies',
                de: 'Anomalieerkennung',
                es: 'Detección de Anomalías'
            }
        },
        dataAnalyst: {
            title: {
                zh: '数据分析师',
                en: 'Data Analyst',
                ja: 'データアナリスト',
                ko: '데이터 분석가',
                fr: 'Analyste de Données',
                de: 'Datenanalyst',
                es: 'Analista de Datos'
            },
            desc: {
                zh: '追踪链上数据、生成收益报告、监控 Gas 费用，提供数据洞察',
                en: 'Track on-chain data, generate yield reports, monitor Gas fees, provide data insights',
                ja: 'オンチェーンデータを追跡し、収益レポートを生成し、Gas 料金を監視し、データインサイトを提供',
                ko: '온체인 데이터 추적, 수익 보고서 생성, Gas 요금 모니터링, 데이터 인사이트 제공',
                fr: 'Suivi des données on-chain, génération de rapports de rendement, surveillance des frais Gas, fourniture d\'insights de données',
                de: 'On-Chain-Daten verfolgen, Yield-Berichte generieren, Gas-Gebühren überwachen, Daten-Einblicke liefern',
                es: 'Rastrear datos on-chain, generar informes de rendimiento, monitorear tarifas de Gas, proporcionar insights de datos'
            },
            tag0: {
                zh: '链上分析',
                en: 'On-Chain Analysis',
                ja: 'オンチェーン分析',
                ko: '온체인 분석',
                fr: 'Analyse On-Chain',
                de: 'On-Chain-Analyse',
                es: 'Análisis On-Chain'
            },
            tag1: {
                zh: '收益报告',
                en: 'Yield Report',
                ja: '収益レポート',
                ko: '수익 보고서',
                fr: 'Rapport de Rendement',
                de: 'Yield-Bericht',
                es: 'Informe de Rendimiento'
            },
            tag2: {
                zh: 'Gas 优化',
                en: 'Gas Optimization',
                ja: 'Gas 最適化',
                ko: 'Gas 최적화',
                fr: 'Optimisation Gas',
                de: 'Gas-Optimierung',
                es: 'Optimización de Gas'
            }
        },
        paymentAssistant: {
            title: {
                zh: '支付助理',
                en: 'Payment Assistant',
                ja: '支払いアシスタント',
                ko: '결제 어시스턴트',
                fr: 'Assistant de Paiement',
                de: 'Zahlungsassistent',
                es: 'Asistente de Pagos'
            },
            desc: {
                zh: '处理定期付款、薪资发放、订阅管理，支持多币种批量转账',
                en: 'Handle recurring payments, salary distribution, subscription management, support multi-currency batch transfers',
                ja: '定期支払い、給与支払い、サブスクリプション管理を処理し、マルチ通貨のバッチ送金をサポート',
                ko: '정기 결제, 급여 지급, 구독 관리를 처리하고, 다중 통화 일괄 이체를 지원',
                fr: 'Gérer les paiements récurrents, la distribution des salaires, la gestion des abonnements, support des transferts batch multi-devises',
                de: 'Wiederkehrende Zahlungen, Gehaltsverteilung, Abonnementverwaltung verarbeiten, Multi-Währungs-Batch-Transfers unterstützen',
                es: 'Manejar pagos recurrentes, distribución de salarios, gestión de suscripciones, soportar transferencias batch multi-moneda'
            },
            tag0: {
                zh: '定期支付',
                en: 'Recurring Payment',
                ja: '定期支払い',
                ko: '정기 결제',
                fr: 'Paiement Récurrent',
                de: 'Wiederkehrende Zahlung',
                es: 'Pago Recurrente'
            },
            tag1: {
                zh: '批量转账',
                en: 'Batch Transfer',
                ja: 'バッチ送金',
                ko: '일괄 이체',
                fr: 'Transfert Batch',
                de: 'Batch-Transfer',
                es: 'Transferencia Batch'
            },
            tag2: {
                zh: '多币种',
                en: 'Multi-Currency',
                ja: 'マルチ通貨',
                ko: '다중 통화',
                fr: 'Multi-Devise',
                de: 'Multi-Währung',
                es: 'Multi-Moneda'
            }
        },
        onChainResearcher: {
            title: {
                zh: '链上研究员',
                en: 'On-Chain Researcher',
                ja: 'オンチェーンリサーチャー',
                ko: '온체인 리서처',
                fr: 'Chercheur On-Chain',
                de: 'On-Chain-Forscher',
                es: 'Investigador On-Chain'
            },
            desc: {
                zh: '追踪新项目、监控空投机会、分析代币经济，主动呈现研究结果',
                en: 'Track new projects, monitor airdrop opportunities, analyze tokenomics, proactively present research findings',
                ja: '新しいプロジェクトを追跡し、エアドロップ機会を監視し、トークノミクスを分析し、研究結果を能動的に提示',
                ko: '새로운 프로젝트 추적, 에어드롭 기회 모니터링, 토큰노믹스 분석, 연구 결과를 능동적으로 제시',
                fr: 'Suivre les nouveaux projets, surveiller les opportunités d\'airdrop, analyser la tokenomique, présenter proactivement les résultats de recherche',
                de: 'Neue Projekte verfolgen, Airdrop-Möglichkeiten überwachen, Tokenomics analysieren, Forschungsergebnisse proaktiv präsentieren',
                es: 'Rastrear nuevos proyectos, monitorear oportunidades de airdrop, analizar tokenómica, presentar proactivamente hallazgos de investigación'
            },
            tag0: {
                zh: '空投追踪',
                en: 'Airdrop Tracking',
                ja: 'エアドロップ追跡',
                ko: '에어드롭 추적',
                fr: 'Suivi d\'Airdrop',
                de: 'Airdrop-Tracking',
                es: 'Seguimiento de Airdrop'
            },
            tag1: {
                zh: '项目调研',
                en: 'Project Research',
                ja: 'プロジェクト調査',
                ko: '프로젝트 리서치',
                fr: 'Recherche de Projet',
                de: 'Projektforschung',
                es: 'Investigación de Proyecto'
            },
            tag2: {
                zh: '代币分析',
                en: 'Token Analysis',
                ja: 'トークン分析',
                ko: '토큰 분석',
                fr: 'Analyse de Token',
                de: 'Token-Analyse',
                es: 'Análisis de Token'
            }
        }
    },
    // Agent Autonomy Section
    agentAutonomy: {
        badge: {
            zh: '自主交互',
            en: 'Autonomous Interaction',
            ja: '自律的インタラクション',
            ko: '자율적 상호작용',
            fr: 'Interaction Autonome',
            de: 'Autonome Interaktion',
            es: 'Interacción Autónoma'
        },
        title: {
            zh: 'OpenClaw 主动管理您的资产',
            en: 'OpenClaw Proactively Manages Your Assets',
            ja: 'OpenClaw があなたの資産を能動的に管理',
            ko: 'OpenClaw가 자산을 능동적으로 관리',
            fr: 'OpenClaw Gère Proactivement Vos Actifs',
            de: 'OpenClaw Verwaltet Ihre Vermögenswerte Proaktiv',
            es: 'OpenClaw Gestiona Proactivamente Tus Activos'
        },
        subtitle: {
            zh: '不是被动响应，而是具备自主行动能力的 AI Agent。通过安全策略限定资金管理边界，让 OpenClaw 主动为您优化投资组合',
            en: 'Not passive response, but an AI Agent with autonomous action capabilities. Define fund management boundaries through security policies, let OpenClaw proactively optimize your investment portfolio',
            ja: '受動的な応答ではなく、自律的な行動能力を持つ AI Agent。セキュリティポリシーで資金管理の境界を定義し、OpenClaw に投資ポートフォリオを能動的に最適化させる',
            ko: '수동적 응답이 아닌, 자율적 행동 능력을 가진 AI 에이전트. 보안 정책으로 자금 관리 경계를 정의하고, OpenClaw가 투자 포트폴리오를 능동적으로 최적화하도록 하세요',
            fr: 'Pas une réponse passive, mais un Agent IA avec des capacités d\'action autonomes. Définissez les limites de gestion des fonds via des politiques de sécurité, laissez OpenClaw optimiser proactivement votre portefeuille d\'investissement',
            de: 'Keine passive Antwort, sondern ein KI-Agent mit autonomen Aktionsfähigkeiten. Definieren Sie Fondsmanagement-Grenzen durch Sicherheitsrichtlinien, lassen Sie OpenClaw Ihr Anlageportfolio proaktiv optimieren',
            es: 'No una respuesta pasiva, sino un Agente IA con capacidades de acción autónomas. Defina los límites de gestión de fondos a través de políticas de seguridad, deje que OpenClaw optimice proactivamente su portafolio de inversión'
        },
        agentName: {
            zh: 'OpenClaw Agent',
            en: 'OpenClaw Agent',
            ja: 'OpenClaw Agent',
            ko: 'OpenClaw Agent',
            fr: 'OpenClaw Agent',
            de: 'OpenClaw Agent',
            es: 'OpenClaw Agent'
        },
        agentStatus: {
            zh: '自主运行中',
            en: 'Running Autonomously',
            ja: '自律実行中',
            ko: '자율 실행 중',
            fr: 'Exécution Autonome',
            de: 'Autonome Ausführung',
            es: 'Ejecución Autónoma'
        },
        monitoringMarket: {
            zh: '监控市场',
            en: 'Monitoring Market',
            ja: '市場を監視中',
            ko: '시장 모니터링',
            fr: 'Surveillance du Marché',
            de: 'Marktüberwachung',
            es: 'Monitoreo del Mercado'
        },
        securityConfig: {
            zh: '安全策略配置',
            en: 'Security Policy Configuration',
            ja: 'セキュリティポリシー設定',
            ko: '보안 정책 구성',
            fr: 'Configuration de la Politique de Sécurité',
            de: 'Sicherheitsrichtlinien-Konfiguration',
            es: 'Configuración de Política de Seguridad'
        },
        enabled: {
            zh: '✓ 已启用',
            en: '✓ Enabled',
            ja: '✓ 有効',
            ko: '✓ 활성화됨',
            fr: '✓ Activé',
            de: '✓ Aktiviert',
            es: '✓ Habilitado'
        },
        dailyLimit: {
            title: {
                zh: '日交易限额',
                en: 'Daily Transaction Limit',
                ja: '日次取引限度額',
                ko: '일일 거래 한도',
                fr: 'Limite de Transaction Journalière',
                de: 'Tägliches Transaktionslimit',
                es: 'Límite de Transacción Diaria'
            },
            desc: {
                zh: '24小时内最大支出',
                en: 'Maximum spending within 24 hours',
                ja: '24時間以内の最大支出',
                ko: '24시간 내 최대 지출',
                fr: 'Dépenses maximales en 24 heures',
                de: 'Maximale Ausgaben innerhalb von 24 Stunden',
                es: 'Gasto máximo dentro de 24 horas'
            }
        },
        singleLimit: {
            title: {
                zh: '单笔限额',
                en: 'Single Transaction Limit',
                ja: '単一取引限度額',
                ko: '단일 거래 한도',
                fr: 'Limite de Transaction Unique',
                de: 'Einzeltransaktionslimit',
                es: 'Límite de Transacción Única'
            },
            desc: {
                zh: '每次交易最大金额',
                en: 'Maximum amount per transaction',
                ja: '取引ごとの最大金額',
                ko: '거래당 최대 금액',
                fr: 'Montant maximum par transaction',
                de: 'Maximaler Betrag pro Transaktion',
                es: 'Monto máximo por transacción'
            }
        },
        whitelist: {
            title: {
                zh: '合约白名单',
                en: 'Contract Whitelist',
                ja: 'コントラクトホワイトリスト',
                ko: '계약 화이트리스트',
                fr: 'Liste Blanche de Contrats',
                de: 'Vertrags-Whitelist',
                es: 'Lista Blanca de Contratos'
            },
            desc: {
                zh: '仅允许交互的合约',
                en: 'Contracts allowed for interaction only',
                ja: 'インタラクションのみ許可されたコントラクト',
                ko: '상호작용만 허용된 계약',
                fr: 'Contrats uniquement autorisés pour interaction',
                de: 'Nur für Interaktion erlaubte Verträge',
                es: 'Contratos solo permitidos para interacción'
            }
        },
        largeTxConfirm: {
            title: {
                zh: '大额确认',
                en: 'Large Transaction Confirmation',
                ja: '大額取引確認',
                ko: '대액 거래 확인',
                fr: 'Confirmation de Transaction Importante',
                de: 'Großtransaktions-Bestätigung',
                es: 'Confirmación de Transacción Grande'
            },
            desc: {
                zh: '超出限额需人工审批',
                en: 'Manual approval required for amounts exceeding limit',
                ja: '限度額を超える場合は手動承認が必要',
                ko: '한도 초과 시 수동 승인 필요',
                fr: 'Approbation manuelle requise pour les montants dépassant la limite',
                de: 'Manuelle Genehmigung für Beträge über dem Limit erforderlich',
                es: 'Aprobación manual requerida para montos que exceden el límite'
            },
            status: {
                zh: '开启',
                en: 'On',
                ja: 'オン',
                ko: '켜짐',
                fr: 'Activé',
                de: 'An',
                es: 'Activado'
            }
        },
        securityTip: {
            label: {
                zh: '安全提示：',
                en: 'Security Tip: ',
                ja: 'セキュリティヒント：',
                ko: '보안 팁: ',
                fr: 'Conseil de Sécurité : ',
                de: 'Sicherheitstipp: ',
                es: 'Consejo de Seguridad: '
            },
            content: {
                zh: 'OpenClaw 的所有操作都在您设定的策略边界内执行。超出限额或遇到可疑交易时，系统会自动拦截并通知您。',
                en: 'All OpenClaw operations are executed within your defined policy boundaries. When exceeding limits or encountering suspicious transactions, the system will automatically intercept and notify you.',
                ja: 'OpenClaw のすべての操作は、あなたが設定したポリシー境界内で実行されます。限度額を超えるか、疑わしい取引に遭遇した場合、システムは自動的にインターセプトして通知します。',
                ko: '모든 OpenClaw 작업은 설정된 정책 경계 내에서 실행됩니다. 한도를 초과하거나 의심스러운 거래를 만나면 시스템이 자동으로 차단하고 알립니다.',
                fr: 'Toutes les opérations OpenClaw sont exécutées dans les limites de politique définies. En cas de dépassement des limites ou de rencontre de transactions suspectes, le système interceptera automatiquement et vous notifiera.',
                de: 'Alle OpenClaw-Operationen werden innerhalb Ihrer definierten Richtliniengrenzen ausgeführt. Bei Überschreitung von Limits oder bei verdächtigen Transaktionen wird das System automatisch abfangen und Sie benachrichtigen.',
                es: 'Todas las operaciones de OpenClaw se ejecutan dentro de los límites de política definidos. Cuando se exceden los límites o se encuentran transacciones sospechosas, el sistema interceptará automáticamente y le notificará.'
            }
        },
        stats: {
            autoExecuted: {
                zh: '自动执行',
                en: 'Auto Executed',
                ja: '自動実行',
                ko: '자동 실행',
                fr: 'Exécuté Automatiquement',
                de: 'Automatisch Ausgeführt',
                es: 'Ejecutado Automáticamente'
            },
            pendingApproval: {
                zh: '待审批',
                en: 'Pending Approval',
                ja: '承認待ち',
                ko: '승인 대기',
                fr: 'En Attente d\'Approbation',
                de: 'Genehmigung Ausstehend',
                es: 'Pendiente de Aprobación'
            },
            blocked: {
                zh: '安全拦截',
                en: 'Security Blocked',
                ja: 'セキュリティブロック',
                ko: '보안 차단',
                fr: 'Bloqué par Sécurité',
                de: 'Sicherheitsblockiert',
                es: 'Bloqueado por Seguridad'
            }
        },
        activities: {
            marketAnalysis: {
                title: {
                    zh: '检测到 ETH 价格回调 5%',
                    en: 'Detected ETH price pullback 5%',
                    ja: 'ETH価格が5%下落を検出',
                    ko: 'ETH 가격 5% 하락 감지',
                    fr: 'Détection du repli du prix ETH de 5%',
                    de: 'ETH-Preisrückgang von 5% erkannt',
                    es: 'Detectada caída del precio de ETH del 5%'
                },
                time: {
                    zh: '09:15 · 市场分析',
                    en: '09:15 · Market Analysis',
                    ja: '09:15 · 市場分析',
                    ko: '09:15 · 시장 분석',
                    fr: '09:15 · Analyse de Marché',
                    de: '09:15 · Marktanalyse',
                    es: '09:15 · Análisis de Mercado'
                }
            },
            strategyDecision: {
                title: {
                    zh: '触发定投策略：买入 0.05 ETH',
                    en: 'DCA strategy triggered: Buy 0.05 ETH',
                    ja: 'DCA戦略がトリガー：0.05 ETH購入',
                    ko: 'DCA 전략 트리거: 0.05 ETH 매수',
                    fr: 'Stratégie DCA déclenchée : Acheter 0.05 ETH',
                    de: 'DCA-Strategie ausgelöst: 0,05 ETH kaufen',
                    es: 'Estrategia DCA activada: Comprar 0.05 ETH'
                },
                time: {
                    zh: '09:16 · 策略执行',
                    en: '09:16 · Strategy Execution',
                    ja: '09:16 · 戦略実行',
                    ko: '09:16 · 전략 실행',
                    fr: '09:16 · Exécution de Stratégie',
                    de: '09:16 · Strategieausführung',
                    es: '09:16 · Ejecución de Estrategia'
                },
                withinLimit: {
                    zh: '✓ 在限额内',
                    en: '✓ Within Limit',
                    ja: '✓ 限度内',
                    ko: '✓ 한도 내',
                    fr: '✓ Dans la Limite',
                    de: '✓ Innerhalb des Limits',
                    es: '✓ Dentro del Límite'
                },
                dailyLimit: {
                    zh: '日限额: $1000 / 已用: $150',
                    en: 'Daily: $1000 / Used: $150',
                    ja: '日次限度: $1000 / 使用: $150',
                    ko: '일일 한도: $1000 / 사용: $150',
                    fr: 'Journalier: $1000 / Utilisé: $150',
                    de: 'Täglich: $1000 / Verwendet: $150',
                    es: 'Diario: $1000 / Usado: $150'
                }
            },
            pendingTx: {
                title: {
                    zh: '大额交易待确认',
                    en: 'Large transaction pending confirmation',
                    ja: '大額取引承認待ち',
                    ko: '대액 거래 승인 대기',
                    fr: 'Transaction importante en attente',
                    de: 'Große Transaktion ausstehend',
                    es: 'Transacción grande pendiente'
                },
                time: {
                    zh: '14:30 · 需要人工审批',
                    en: '14:30 · Manual approval required',
                    ja: '14:30 · 手動承認必要',
                    ko: '14:30 · 수동 승인 필요',
                    fr: '14:30 · Approbation manuelle requise',
                    de: '14:30 · Manuelle Genehmigung erforderlich',
                    es: '14:30 · Aprobación manual requerida'
                },
                txDetail: {
                    zh: '发送 2 ETH 到 0x789...abc',
                    en: 'Send 2 ETH to 0x789...abc',
                    ja: '0x789...abc に 2 ETH 送信',
                    ko: '0x789...abc로 2 ETH 전송',
                    fr: 'Envoyer 2 ETH à 0x789...abc',
                    de: '2 ETH an 0x789...abc senden',
                    es: 'Enviar 2 ETH a 0x789...abc'
                },
                warning: {
                    zh: '⚠️ 超出单笔限额 ($500)，需确认',
                    en: '⚠️ Exceeds single limit ($500), confirmation needed',
                    ja: '⚠️ 単一限度額 ($500) を超過、確認必要',
                    ko: '⚠️ 단일 한도 ($500) 초과, 확인 필요',
                    fr: '⚠️ Dépasse la limite unique ($500), confirmation requise',
                    de: '⚠️ Überschreitet Einzellimit ($500), Bestätigung erforderlich',
                    es: '⚠️ Excede el límite único ($500), confirmación necesaria'
                }
            },
            yieldOptimization: {
                title: {
                    zh: '自动质押 100 USDC 到 Aave',
                    en: 'Auto-stake 100 USDC to Aave',
                    ja: '自動的に 100 USDC を Aave にステーク',
                    ko: '자동으로 100 USDC Aave에 스테이킹',
                    fr: 'Auto-stake 100 USDC sur Aave',
                    de: 'Automatisch 100 USDC auf Aave staken',
                    es: 'Auto-stake 100 USDC a Aave'
                },
                time: {
                    zh: '16:00 · 收益优化',
                    en: '16:00 · Yield Optimization',
                    ja: '16:00 · 収益最適化',
                    ko: '16:00 · 수익 최적화',
                    fr: '16:00 · Optimisation du Rendement',
                    de: '16:00 · Yield-Optimierung',
                    es: '16:00 · Optimización de Rendimiento'
                },
                whitelist: {
                    zh: '✓ 白名单合约',
                    en: '✓ Whitelist Contract',
                    ja: '✓ ホワイトリストコントラクト',
                    ko: '✓ 화이트리스트 계약',
                    fr: '✓ Contrat Liste Blanche',
                    de: '✓ Whitelist-Vertrag',
                    es: '✓ Contrato Lista Blanca'
                },
                apy: {
                    zh: 'APY: 4.2%',
                    en: 'APY: 4.2%',
                    ja: 'APY: 4.2%',
                    ko: 'APY: 4.2%',
                    fr: 'APY: 4,2%',
                    de: 'APY: 4,2%',
                    es: 'APY: 4.2%'
                }
            },
            riskAlert: {
                title: {
                    zh: '阻止可疑交易',
                    en: 'Blocked suspicious transaction',
                    ja: '疑わしい取引をブロック',
                    ko: '의심스러운 거래 차단',
                    fr: 'Transaction suspecte bloquée',
                    de: 'Verdächtige Transaktion blockiert',
                    es: 'Transacción sospechosa bloqueada'
                },
                time: {
                    zh: '18:45 · 安全拦截',
                    en: '18:45 · Security Intercept',
                    ja: '18:45 · セキュリティインターセプト',
                    ko: '18:45 · 보안 차단',
                    fr: '18:45 · Interception Sécurité',
                    de: '18:45 · Sicherheitsabfang',
                    es: '18:45 · Intercepción de Seguridad'
                },
                unauthorized: {
                    zh: '检测到未授权合约交互请求',
                    en: 'Detected unauthorized contract interaction',
                    ja: '未承認コントラクトインタラクションを検出',
                    ko: '무단 계약 상호작용 감지',
                    fr: 'Interaction contractuelle non autorisée détectée',
                    de: 'Unbefugte Vertragsinteraktion erkannt',
                    es: 'Detectada interacción de contrato no autorizada'
                },
                blocked: {
                    zh: '✗ 合约不在白名单中，已自动拒绝',
                    en: '✗ Contract not in whitelist, auto-rejected',
                    ja: '✗ コントラクトがホワイトリストにないため自動拒否',
                    ko: '✗ 화이트리스트에 없는 계약, 자동 거부',
                    fr: '✗ Contrat non en liste blanche, rejet automatique',
                    de: '✗ Vertrag nicht in Whitelist, automatisch abgelehnt',
                    es: '✗ Contrato no en lista blanca, rechazado automáticamente'
                }
            }
        }
    },
    // Testimonials Content
    testimonialsContent: {
        user1: {
            name: {
                zh: '张先生',
                en: 'Mr. Zhang',
                ja: '張さん',
                ko: '장 씨',
                fr: 'M. Zhang',
                de: 'Herr Zhang',
                es: 'Sr. Zhang'
            },
            role: {
                zh: 'DeFi 投资者',
                en: 'DeFi Investor',
                ja: 'DeFi 投資家',
                ko: 'DeFi 투자자',
                fr: 'Investisseur DeFi',
                de: 'DeFi-Investor',
                es: 'Inversor DeFi'
            },
            content: {
                zh: '以前用其他钱包总是担心私钥丢失，ClawWallet 的无私钥设计让我安心多了。用 OpenClaw 说句话就能转账，太方便了！',
                en: 'I used to worry about losing my private keys with other wallets. ClawWallet\'s keyless design gives me peace of mind. I can transfer money just by talking to OpenClaw!',
                ja: '以前は他のウォレットで秘密鍵を紛失するのではないかと心配していましたが、ClawWallet のキーレス設計のおかげで安心できるようになりました。OpenClaw に話しかけるだけで送金できます！',
                ko: '예전에는 다른 지갑으로 개인 키를 잃어버릴까 봐 걱정했는데, ClawWallet의 키리스 설계 덕분에 마음이 편해졌습니다. OpenClaw에게 말만 하면 송금할 수 있어요!',
                fr: 'Avant, je m\'inquiétais de perdre mes clés privées avec d\'autres portefeuilles. La conception sans clé de ClawWallet me donne la tranquillité d\'esprit. Je peux transférer de l\'argent juste en parlant à OpenClaw !',
                de: 'Früher habe ich mir Sorgen gemacht, meine privaten Schlüssel mit anderen Wallets zu verlieren. Das schlüssellose Design von ClawWallet gibt mir Seelenfrieden. Ich kann Geld überweisen, indem ich einfach mit OpenClaw spreche!',
                es: 'Solía preocuparme por perder mis claves privadas con otras carteras. El diseño sin clave de ClawWallet me da tranquilidad. ¡Puedo transferir dinero simplemente hablando con OpenClaw!'
            }
        },
        user2: {
            name: {
                zh: '李女士',
                en: 'Ms. Li',
                ja: '李さん',
                ko: '이 씨',
                fr: 'Mme Li',
                de: 'Frau Li',
                es: 'Sra. Li'
            },
            role: {
                zh: '加密货币爱好者',
                en: 'Crypto Enthusiast',
                ja: '暗号通貨愛好家',
                ko: '암호화폐 애호가',
                fr: 'Passionné de Crypto',
                de: 'Krypto-Enthusiast',
                es: 'Entusiasta de Cripto'
            },
            content: {
                zh: '作为一个不太懂技术的普通用户，ClawWallet 让我也能轻松管理加密资产。不用记助记词，不用保管私钥，真的很省心。',
                en: 'As an ordinary user who doesn\'t understand technology well, ClawWallet allows me to easily manage crypto assets. No need to remember seed phrases or keep private keys, really worry-free.',
                ja: '技術をよく理解していない一般ユーザーとして、ClawWallet によって暗号資産を簡単に管理できるようになりました。シードフレーズを覚える必要も、秘密鍵を保管する必要もなく、本当に安心です。',
                ko: '기술을 잘 이해하지 못하는 일반 사용자로서, ClawWallet을 통해 암호화폐 자산을 쉽게 관리할 수 있게 되었습니다. 시드 문구를 기억하거나 개인 키를 보관할 필요가 없어 정말 마음이 편합니다.',
                fr: 'En tant qu\'utilisateur ordinaire qui ne comprend pas bien la technologie, ClawWallet me permet de gérer facilement les actifs crypto. Pas besoin de mémoriser des phrases de récupération ou de conserver des clés privées, vraiment sans souci.',
                de: 'Als normaler Benutzer, der Technik nicht gut versteht, ermöglicht mir ClawWallet, Krypto-Vermögenswerte einfach zu verwalten. Keine Notwendigkeit, Seed-Phrasen zu merken oder private Schlüssel aufzubewahren, wirklich sorgenfrei.',
                es: 'Como usuario ordinario que no entiende bien la tecnología, ClawWallet me permite gestionar fácilmente activos cripto. No es necesario recordar frases semilla o guardar claves privadas, realmente sin preocupaciones.'
            }
        },
        user3: {
            name: {
                zh: '王先生',
                en: 'Mr. Wang',
                ja: '王さん',
                ko: '왕 씨',
                fr: 'M. Wang',
                de: 'Herr Wang',
                es: 'Sr. Wang'
            },
            role: {
                zh: 'Web3 探索者',
                en: 'Web3 Explorer',
                ja: 'Web3 探検家',
                ko: 'Web3 탐험가',
                fr: 'Explorateur Web3',
                de: 'Web3-Explorer',
                es: 'Explorador Web3'
            },
            content: {
                zh: '设置好安全策略后，OpenClaw 能帮我自动做定投和收益优化，完全不用我操心。而且每笔大额交易都会通知我确认，既省心又安全。',
                en: 'After setting up security policies, OpenClaw can automatically do DCA and yield optimization for me without any worry. And every large transaction will notify me for confirmation, both worry-free and secure.',
                ja: 'セキュリティポリシーを設定した後、OpenClaw は私のために自動的に DCA と収益最適化を行ってくれます。そして大きな取引ごとに確認の通知が来るので、安心で安全です。',
                ko: '보안 정책을 설정한 후, OpenClaw는 제 걱정 없이 자동으로 DCA와 수익 최적화를 해줍니다. 그리고 큰 거래마다 확인 알림이 와서 마음 편하고 안전합니다.',
                fr: 'Après avoir configuré les politiques de sécurité, OpenClaw peut automatiquement faire du DCA et de l\'optimisation de rendement pour moi sans aucun souci. Et chaque grande transaction me notifiera pour confirmation, à la fois sans souci et sécurisé.',
                de: 'Nach dem Einrichten von Sicherheitsrichtlinien kann OpenClaw automatisch DCA und Yield-Optimierung für mich durchführen, ohne jegliche Sorge. Und jede große Transaktion benachrichtigt mich zur Bestätigung, sowohl sorgenfrei als auch sicher.',
                es: 'Después de configurar las políticas de seguridad, OpenClaw puede hacer automáticamente DCA y optimización de rendimiento para mí sin ninguna preocupación. Y cada transacción grande me notificará para confirmación, tanto sin preocupaciones como seguro.'
            }
        },
        subtitle: {
            zh: '来自真实用户的使用体验分享',
            en: 'Real user experience sharing',
            ja: '実際のユーザーの使用体験シェア',
            ko: '실제 사용자의 사용 경험 공유',
            fr: 'Partage d\'expérience d\'utilisateurs réels',
            de: 'Erfahrungsaustausch echter Benutzer',
            es: 'Compartir experiencia de usuarios reales'
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
}),
"[project]/src/app/landingpage/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-ssr] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-ssr] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landingpage$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landingpage/i18n.ts [app-ssr] (ecmascript)");
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
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        titleKey: "features.tee.title",
        descKey: "features.tee.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        titleKey: "features.fast.title",
        descKey: "features.fast.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        titleKey: "features.multichain.title",
        descKey: "features.multichain.desc"
    }
];
const detailedFeaturesKeys = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
        titleKey: "security.teeSharding.title",
        descKey: "security.teeSharding.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        titleKey: "security.txEngine.title",
        descKey: "security.txEngine.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
        titleKey: "security.confirm.title",
        descKey: "security.confirm.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        titleKey: "security.scan.title",
        descKey: "security.scan.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
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
function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl border border-gray-100 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-gray-900 text-base group-hover:text-orange-600 transition-colors pr-4",
                        children: question
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-orange-100' : 'bg-gray-100 group-hover:bg-orange-50'}`,
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                            className: "w-5 h-5 text-orange-500"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "w-5 h-5 text-gray-400 group-hover:text-orange-500"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    transition: {
                        duration: 0.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 pb-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 leading-relaxed",
                            children: answer
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 109,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 108,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/landingpage/page.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
function LandingPage() {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentLang, setCurrentLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("zh");
    const [isLangMenuOpen, setIsLangMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [installTab, setInstallTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('cli');
    const handleCopy = async ()=>{
        await navigator.clipboard.writeText(installCommand);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    const t = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landingpage$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(key, currentLang);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#fafafa]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed top-0 left-0 right-0 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative border-b border-gray-200/50 bg-white/70 backdrop-blur-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto px-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between h-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "flex items-center gap-3 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-xl overflow-hidden shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-shadow",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/claw.png",
                                                    alt: "ClawWallet",
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-900 font-bold text-sm tracking-tight",
                                                children: "ClawWallet"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:flex items-center gap-1",
                                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: "px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors",
                                                children: t(link.key)
                                            }, link.href, false, {
                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setIsLangMenuOpen(!isLangMenuOpen),
                                                        className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                className: "w-4 h-4 text-gray-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landingpage$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["languages"].find((l)=>l.code === currentLang)?.flag
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                className: "w-3 h-3 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 19
                                                    }, this),
                                                    isLangMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 8
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        className: "absolute top-full right-0 mt-2 w-40 bg-white rounded-xl border border-gray-100 shadow-xl py-1 max-h-64 overflow-y-auto",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landingpage$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["languages"].map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setCurrentLang(lang.code);
                                                                    setIsLangMenuOpen(false);
                                                                },
                                                                className: `w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 ${currentLang === lang.code ? "text-orange-600" : "text-gray-700"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: lang.flag
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 199,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: lang.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 200,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, lang.code, true, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden md:flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://github.com",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                            className: "w-4 h-4 text-gray-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://twitter.com",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                                            className: "w-4 h-4 text-gray-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                                className: "md:hidden w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center",
                                                children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-5 h-5 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                    className: "w-5 h-5 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto px-6 py-4 space-y-3",
                            children: [
                                navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        onClick: ()=>setIsMobileMenuOpen(false),
                                        className: "block py-2 text-gray-600 hover:text-gray-900",
                                        children: t(link.key)
                                    }, link.href, false, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-3 border-t border-gray-100 flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://github.com",
                                            className: "flex items-center gap-2 text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: "GitHub"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://twitter.com",
                                            className: "flex items-center gap-2 text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: "Twitter"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 267,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 262,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 251,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative pt-32 pb-20 lg:pt-40 min-h-screen flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-orange-50/50 via-white to-white pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-6xl mx-auto px-6 flex-1 flex flex-col justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -30
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1
                                        ]
                                    },
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                scale: 0.9
                                            },
                                            animate: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            transition: {
                                                delay: 0.1
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t("hero.badge")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text",
                                                            children: "Claw Wallet"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent",
                                                            children: t("hero.mainTitle")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed",
                                                    children: t("hero.subtitle")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-3",
                                            children: [
                                                t("hero.features.tee"),
                                                t("hero.features.multichain"),
                                                t("hero.features.zeroconf")
                                            ].map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg",
                                                    children: feature
                                                }, i, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 316,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.2,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1
                                        ]
                                    },
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex p-2 gap-2 bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setInstallTab('cli'),
                                                            className: `flex-1 py-2.5 px-4 text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-2 ${installTab === 'cli' ? 'text-gray-900 bg-white shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-700'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                    lineNumber: 344,
                                                                    columnNumber: 21
                                                                }, this),
                                                                t("installTabs.cli")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setInstallTab('openclaw'),
                                                            className: `flex-1 py-2.5 px-4 text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-2 ${installTab === 'openclaw' ? 'text-gray-900 bg-white shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-700'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                    lineNumber: 355,
                                                                    columnNumber: 21
                                                                }, this),
                                                                t("installTabs.openclaw")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6",
                                                    children: installTab === 'cli' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600 text-sm text-center",
                                                                children: t("installTabs.cliDesc")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 365,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        className: "flex-1 text-sm text-gray-700 font-mono truncate",
                                                                        children: installCommand
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 370,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            navigator.clipboard.writeText(installCommand);
                                                                            setCopied(true);
                                                                            setTimeout(()=>setCopied(false), 2000);
                                                                        },
                                                                        className: "flex items-center gap-1.5 px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-600 text-sm font-medium transition-colors",
                                                                        children: [
                                                                            copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                className: "w-3.5 h-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                lineNumber: 375,
                                                                                columnNumber: 37
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                className: "w-3.5 h-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                lineNumber: 375,
                                                                                columnNumber: 73
                                                                            }, this),
                                                                            t("installTabs.copy")
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 371,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600 text-sm text-center",
                                                                children: t("installTabs.openclawDesc")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        className: "flex-1 text-sm text-gray-700 font-mono truncate",
                                                                        children: t("installTabs.openClawCommand")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 388,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            navigator.clipboard.writeText(t("installTabs.openClawCommand"));
                                                                            setCopied(true);
                                                                            setTimeout(()=>setCopied(false), 2000);
                                                                        },
                                                                        className: "flex items-center gap-1.5 px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-600 text-sm font-medium transition-colors",
                                                                        children: [
                                                                            copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                className: "w-3.5 h-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                lineNumber: 393,
                                                                                columnNumber: 37
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                className: "w-3.5 h-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                lineNumber: 393,
                                                                                columnNumber: 73
                                                                            }, this),
                                                                            t("installTabs.copy")
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 389,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm text-center",
                                            children: t("installTabs.noRegistration")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 402,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mt-auto pt-20 pb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-gray-400 text-sm font-medium mb-8 tracking-wide uppercase",
                                    children: t("partners.title")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap justify-center items-center gap-12 md:gap-16",
                                    children: partners.map((partner, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            className: "group flex flex-col items-center gap-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: partner.logoPath,
                                                    alt: partner.name,
                                                    className: "w-full h-full object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                lineNumber: 424,
                                                columnNumber: 19
                                            }, this)
                                        }, partner.name, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 415,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 411,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 bg-white border-t border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-orange-500 text-sm font-semibold uppercase tracking-wider",
                                    children: t("agentAutonomy.badge")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-gray-900 mt-3",
                                    children: t("agentAutonomy.title")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 444,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 mt-4 max-w-2xl mx-auto",
                                    children: t("agentAutonomy.subtitle")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 445,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -30
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.6
                                    },
                                    className: "bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden shadow-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                        className: "w-5 h-5 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold text-gray-900",
                                                            children: t("agentAutonomy.agentName")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400",
                                                            children: t("agentAutonomy.agentStatus")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 465,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ml-auto flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2 h-2 bg-green-400 rounded-full animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-400",
                                                            children: t("agentAutonomy.monitoringMarket")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 space-y-4 max-h-[500px] overflow-y-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    transition: {
                                                        delay: 0.2
                                                    },
                                                    className: "bg-white rounded-xl p-4 border border-gray-100 shadow-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: "📊"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                    lineNumber: 485,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 484,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-800 font-medium",
                                                                        children: t("agentAutonomy.activities.marketAnalysis.title")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 488,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500 mt-1",
                                                                        children: t("agentAutonomy.activities.marketAnalysis.time")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 489,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 487,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    transition: {
                                                        delay: 0.3
                                                    },
                                                    className: "bg-white rounded-xl p-4 border border-gray-100 shadow-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: "🧠"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                    lineNumber: 504,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 503,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-800 font-medium",
                                                                        children: t("agentAutonomy.activities.strategyDecision.title")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 507,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500 mt-1",
                                                                        children: t("agentAutonomy.activities.strategyDecision.time")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 508,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2 flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs px-2 py-1 bg-green-50 text-green-600 rounded",
                                                                                children: t("agentAutonomy.activities.strategyDecision.withinLimit")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                lineNumber: 510,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs text-gray-400",
                                                                                children: t("agentAutonomy.activities.strategyDecision.dailyLimit")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                lineNumber: 511,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 509,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 506,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    transition: {
                                                        delay: 0.4
                                                    },
                                                    className: "bg-orange-50 rounded-xl p-4 border border-orange-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: "⏳"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                    lineNumber: 527,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 526,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-800 font-medium",
                                                                        children: t("agentAutonomy.activities.pendingTx.title")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 530,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500 mt-1",
                                                                        children: t("agentAutonomy.activities.pendingTx.time")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 531,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2 bg-white rounded-lg p-3 border border-orange-100",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-gray-600",
                                                                                children: t("agentAutonomy.activities.pendingTx.txDetail")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                lineNumber: 533,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-orange-600 mt-1",
                                                                                children: t("agentAutonomy.activities.pendingTx.warning")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                lineNumber: 534,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 532,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 529,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    transition: {
                                                        delay: 0.5
                                                    },
                                                    className: "bg-white rounded-xl p-4 border border-gray-100 shadow-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: "🌾"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                    lineNumber: 550,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 549,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-800 font-medium",
                                                                        children: t("agentAutonomy.activities.yieldOptimization.title")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 553,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500 mt-1",
                                                                        children: t("agentAutonomy.activities.yieldOptimization.time")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 554,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2 flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs px-2 py-1 bg-green-50 text-green-600 rounded",
                                                                                children: t("agentAutonomy.activities.yieldOptimization.whitelist")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                lineNumber: 556,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs text-gray-400",
                                                                                children: t("agentAutonomy.activities.yieldOptimization.apy")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                lineNumber: 557,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 555,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 552,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 548,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    transition: {
                                                        delay: 0.6
                                                    },
                                                    className: "bg-red-50 rounded-xl p-4 border border-red-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: "🛡️"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                    lineNumber: 573,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 572,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-800 font-medium",
                                                                        children: t("agentAutonomy.activities.riskAlert.title")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 576,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500 mt-1",
                                                                        children: t("agentAutonomy.activities.riskAlert.time")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 577,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2 bg-white rounded-lg p-3 border border-red-100",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-gray-600",
                                                                                children: t("agentAutonomy.activities.riskAlert.unauthorized")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                lineNumber: 579,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-red-600 mt-1",
                                                                                children: t("agentAutonomy.activities.riskAlert.blocked")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                lineNumber: 580,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                                        lineNumber: 578,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 575,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 571,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 564,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 474,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: 30
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.2
                                    },
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-3xl border border-gray-200 p-6 shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                            className: "w-6 h-6 text-orange-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 598,
                                                            columnNumber: 19
                                                        }, this),
                                                        t("agentAutonomy.securityConfig")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 597,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between p-4 bg-gray-50 rounded-xl",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                                                className: "w-5 h-5 text-orange-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                lineNumber: 608,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                                            lineNumber: 607,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-medium text-gray-900",
                                                                                    children: t("agentAutonomy.dailyLimit.title")
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                    lineNumber: 611,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-gray-500",
                                                                                    children: t("agentAutonomy.dailyLimit.desc")
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                    lineNumber: 612,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                                            lineNumber: 610,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                    lineNumber: 606,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-right",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-semibold text-gray-900",
                                                                            children: "$1,000"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                                            lineNumber: 616,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-green-600",
                                                                            children: t("agentAutonomy.enabled")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                                            lineNumber: 617,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                    lineNumber: 615,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 605,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between p-4 bg-gray-50 rounded-xl",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                                className: "w-5 h-5 text-blue-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                lineNumber: 625,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                                            lineNumber: 624,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-medium text-gray-900",
                                                                                    children: t("agentAutonomy.singleLimit.title")
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                    lineNumber: 628,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-gray-500",
                                                                                    children: t("agentAutonomy.singleLimit.desc")
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                    lineNumber: 629,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                                            lineNumber: 627,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                    lineNumber: 623,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-right",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-semibold text-gray-900",
                                                                            children: "$500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                                            lineNumber: 633,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-green-600",
                                                                            children: t("agentAutonomy.enabled")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                                            lineNumber: 634,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                    lineNumber: 632,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 622,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between p-4 bg-gray-50 rounded-xl",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                className: "w-5 h-5 text-green-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                lineNumber: 642,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                                            lineNumber: 641,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-medium text-gray-900",
                                                                                    children: t("agentAutonomy.whitelist.title")
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                    lineNumber: 645,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-gray-500",
                                                                                    children: t("agentAutonomy.whitelist.desc")
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                    lineNumber: 646,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                                            lineNumber: 644,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                    lineNumber: 640,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-right",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-semibold text-gray-900",
                                                                            children: "12 个"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                                            lineNumber: 650,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-green-600",
                                                                            children: t("agentAutonomy.enabled")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                                            lineNumber: 651,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                    lineNumber: 649,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 639,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between p-4 bg-gray-50 rounded-xl",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                                                className: "w-5 h-5 text-purple-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                lineNumber: 659,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                                            lineNumber: 658,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-medium text-gray-900",
                                                                                    children: t("agentAutonomy.largeTxConfirm.title")
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                    lineNumber: 662,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-gray-500",
                                                                                    children: t("agentAutonomy.largeTxConfirm.desc")
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                                    lineNumber: 663,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                                            lineNumber: 661,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                    lineNumber: 657,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-right",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-semibold text-gray-900",
                                                                            children: t("agentAutonomy.largeTxConfirm.status")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                                            lineNumber: 667,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-green-600",
                                                                            children: t("agentAutonomy.enabled")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                                            lineNumber: 668,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                    lineNumber: 666,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 656,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 603,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-orange-600",
                                                                children: t("agentAutonomy.securityTip.label")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 676,
                                                                columnNumber: 21
                                                            }, this),
                                                            t("agentAutonomy.securityTip.content")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 675,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 674,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 596,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-2xl p-4 border border-gray-100 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-gray-900",
                                                            children: "156"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 685,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500",
                                                            children: t("agentAutonomy.stats.autoExecuted")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 686,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 684,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-2xl p-4 border border-gray-100 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-orange-500",
                                                            children: "3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 689,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500",
                                                            children: t("agentAutonomy.stats.pendingApproval")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 690,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 688,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-2xl p-4 border border-gray-100 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-green-500",
                                                            children: "0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 693,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500",
                                                            children: t("agentAutonomy.stats.blocked")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 694,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 692,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 683,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 589,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 449,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 440,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 439,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "features",
                className: "py-24 bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        className: "bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-12 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                    className: "w-4 h-4 text-orange-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 715,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-orange-600 text-sm font-medium",
                                                    children: t("features.tee.title")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 716,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 714,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl md:text-3xl font-bold text-gray-900 mb-4",
                                            children: t("security.title")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 718,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 mb-8 leading-relaxed",
                                            children: t("security.subtitle")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 721,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: detailedFeaturesKeys.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                        delay: 0.3 + index * 0.1
                                                    },
                                                    className: "flex items-start gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                                                className: "w-5 h-5 text-orange-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                                lineNumber: 735,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 734,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-gray-900 mb-1",
                                                                    children: t(feature.titleKey)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                    lineNumber: 738,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-500 text-sm",
                                                                    children: t(feature.descKey)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                                    lineNumber: 739,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 737,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, feature.titleKey, true, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 726,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 724,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 713,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-square bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 rounded-3xl flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                scale: 0.8,
                                                opacity: 0
                                            },
                                            whileInView: {
                                                scale: 1,
                                                opacity: 1
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                delay: 0.3
                                            },
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center mx-auto mb-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                        className: "w-16 h-16 text-orange-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 756,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 755,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 font-semibold text-lg",
                                                    children: t("security.teeTitle")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 758,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 text-sm mt-2",
                                                    children: t("security.teeSubtitle")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 759,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 748,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 747,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 746,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 712,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 706,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 704,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 703,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 bg-white border-t border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "text-center mb-16",
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
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-orange-500 mb-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-4 h-px bg-orange-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 779,
                                            columnNumber: 15
                                        }, this),
                                        t("agentRoles.badge"),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-4 h-px bg-orange-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 781,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 778,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                                    children: t("agentRoles.title")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 783,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base text-gray-500 leading-relaxed max-w-2xl mx-auto",
                                    children: t("agentRoles.subtitle")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 786,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 771,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: [
                                {
                                    icon: "📈",
                                    titleKey: "agentRoles.defiTrader.title",
                                    descKey: "agentRoles.defiTrader.desc",
                                    tagKeys: [
                                        "agentRoles.defiTrader.tag0",
                                        "agentRoles.defiTrader.tag1",
                                        "agentRoles.defiTrader.tag2"
                                    ]
                                },
                                {
                                    icon: "💼",
                                    titleKey: "agentRoles.assetManager.title",
                                    descKey: "agentRoles.assetManager.desc",
                                    tagKeys: [
                                        "agentRoles.assetManager.tag0",
                                        "agentRoles.assetManager.tag1",
                                        "agentRoles.assetManager.tag2"
                                    ]
                                },
                                {
                                    icon: "🛡️",
                                    titleKey: "agentRoles.securityAuditor.title",
                                    descKey: "agentRoles.securityAuditor.desc",
                                    tagKeys: [
                                        "agentRoles.securityAuditor.tag0",
                                        "agentRoles.securityAuditor.tag1",
                                        "agentRoles.securityAuditor.tag2"
                                    ]
                                },
                                {
                                    icon: "📊",
                                    titleKey: "agentRoles.dataAnalyst.title",
                                    descKey: "agentRoles.dataAnalyst.desc",
                                    tagKeys: [
                                        "agentRoles.dataAnalyst.tag0",
                                        "agentRoles.dataAnalyst.tag1",
                                        "agentRoles.dataAnalyst.tag2"
                                    ]
                                },
                                {
                                    icon: "🤝",
                                    titleKey: "agentRoles.paymentAssistant.title",
                                    descKey: "agentRoles.paymentAssistant.desc",
                                    tagKeys: [
                                        "agentRoles.paymentAssistant.tag0",
                                        "agentRoles.paymentAssistant.tag1",
                                        "agentRoles.paymentAssistant.tag2"
                                    ]
                                },
                                {
                                    icon: "🔍",
                                    titleKey: "agentRoles.onChainResearcher.title",
                                    descKey: "agentRoles.onChainResearcher.desc",
                                    tagKeys: [
                                        "agentRoles.onChainResearcher.tag0",
                                        "agentRoles.onChainResearcher.tag1",
                                        "agentRoles.onChainResearcher.tag2"
                                    ]
                                }
                            ].map((role, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "group bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-orange-200 transition-all duration-300 hover:bg-white hover:shadow-lg",
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
                                        duration: 0.4,
                                        delay: idx * 0.1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl mb-4",
                                            children: role.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 838,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold mb-2 text-gray-900",
                                            children: t(role.titleKey)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 839,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 leading-relaxed mb-4",
                                            children: t(role.descKey)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 840,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: role.tagKeys.map((tagKey, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-1 rounded bg-gray-100 text-[10px] text-gray-500 border border-gray-200",
                                                    children: t(tagKey)
                                                }, i, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 843,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 841,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 830,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 791,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 770,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 769,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "testimonials",
                className: "py-24 bg-white border-t border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-orange-500 text-sm font-semibold uppercase tracking-wider",
                                    children: t("testimonialsContent.badge")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 859,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4",
                                    children: t("testimonialsContent.title")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 860,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-lg max-w-xl mx-auto",
                                    children: t("testimonialsContent.subtitle")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 861,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 858,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-8",
                            children: [
                                {
                                    key: "testimonialsContent.user1",
                                    rating: 5,
                                    avatar: "👨‍💼"
                                },
                                {
                                    key: "testimonialsContent.user2",
                                    rating: 5,
                                    avatar: "👩‍💻"
                                },
                                {
                                    key: "testimonialsContent.user3",
                                    rating: 5,
                                    avatar: "🧑‍🚀"
                                }
                            ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: index * 0.15,
                                        duration: 0.5
                                    },
                                    className: "group bg-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-0.5 mb-6",
                                            children: [
                                                ...Array(item.rating)
                                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "w-4 h-4 fill-orange-400 text-orange-400"
                                                }, i, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 894,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 892,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 leading-relaxed mb-8 min-h-[80px]",
                                            children: [
                                                '"',
                                                t(`${item.key}.content`),
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 899,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 pt-6 border-t border-gray-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-xl",
                                                    children: item.avatar
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 905,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-gray-900",
                                                            children: t(`${item.key}.name`)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 909,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-400 text-sm",
                                                            children: t(`${item.key}.role`)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 912,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                                    lineNumber: 908,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 904,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.key, true, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 883,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 865,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 856,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 855,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "faq",
                className: "py-24 bg-gray-50 border-t border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-orange-500 text-sm font-semibold uppercase tracking-wider",
                                    children: t("faq.title")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 928,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4",
                                    children: t("faq.title")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 929,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-lg",
                                    children: t("faq.subtitle")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 930,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 927,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: faqKeys.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        delay: index * 0.1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQItem, {
                                        question: t(faq.qKey),
                                        answer: t(faq.aKey)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 943,
                                        columnNumber: 17
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 936,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 934,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            className: "mt-12 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 mb-4",
                                    children: t("faq.moreQuestions")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 955,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:support@clawwallet.io",
                                    className: "inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium",
                                    children: [
                                        t("faq.contactUs"),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 961,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 956,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 949,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 925,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 924,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "install",
                className: "py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-6 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "relative bg-white rounded-3xl p-10 md:p-16 border border-gray-100 shadow-2xl overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 978,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-24 -right-24 w-48 h-48 bg-orange-100 rounded-full blur-3xl opacity-50"
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 979,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-24 -left-24 w-48 h-48 bg-orange-50 rounded-full blur-3xl opacity-50"
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 980,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            scale: 0
                                        },
                                        whileInView: {
                                            scale: 1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            delay: 0.2,
                                            type: "spring"
                                        },
                                        className: "w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-orange-500/30 overflow-hidden bg-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/claw.png",
                                            alt: "ClawWallet",
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 991,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 984,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                                        children: t("cta.title")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 999,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-lg mb-10 max-w-lg mx-auto",
                                        children: t("cta.subtitle")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 1002,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex flex-col sm:flex-row items-center gap-3 p-2 bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "text-sm text-gray-300 font-mono px-4 py-2",
                                                children: installCommand
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                lineNumber: 1008,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleCopy,
                                                className: `flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${copied ? "bg-green-500 text-white" : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25"}`,
                                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 1019,
                                                            columnNumber: 23
                                                        }, this),
                                                        t("cta.copied")
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                                            lineNumber: 1024,
                                                            columnNumber: 23
                                                        }, this),
                                                        t("cta.copyCommand")
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                lineNumber: 1009,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 1007,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap justify-center gap-6 text-sm text-gray-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-4 h-4 text-green-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 1034,
                                                        columnNumber: 19
                                                    }, this),
                                                    t("cta.features.opensource")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                lineNumber: 1033,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-4 h-4 text-green-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 1038,
                                                        columnNumber: 19
                                                    }, this),
                                                    t("cta.features.noreg")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                lineNumber: 1037,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-4 h-4 text-green-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                                        lineNumber: 1042,
                                                        columnNumber: 19
                                                    }, this),
                                                    t("cta.features.instant")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landingpage/page.tsx",
                                                lineNumber: 1041,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 1032,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 982,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 970,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 969,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 968,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "py-8 border-t border-gray-100 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-6 rounded-md overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/claw.png",
                                            alt: "ClawWallet",
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 1057,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 1056,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600 text-sm",
                                        children: "Claw Wallet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 1063,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 1055,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-xs",
                                children: t("footer.copyright")
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 1065,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 1054,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1053,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1052,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/landingpage/page.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_landingpage_3d796380._.js.map