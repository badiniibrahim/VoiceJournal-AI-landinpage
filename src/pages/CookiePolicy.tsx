import { useTranslation } from 'react-i18next'

export function CookiePolicy() {
  const { i18n } = useTranslation()
  const fr = i18n.language?.startsWith('fr')

  return fr ? <CookiePolicyFR /> : <CookiePolicyEN />
}

function CookiePolicyFR() {
  return (
    <>
      <h1>Politique des Cookies</h1>
      <p className="text-text-muted/70 text-sm !mb-8">Derniere mise a jour : 31 mars 2026</p>

      <h2>1. Introduction</h2>
      <p>
        La presente Politique des Cookies explique comment <strong>SAWADOGO Badini Ibrahim</strong>
        (ci-apres &laquo; nous &raquo;) utilise les cookies et technologies similaires sur le site internet
        VoiceJournal AI (ci-apres &laquo; le Site &raquo;) et dans l'application mobile VoiceJournal AI
        (ci-apres &laquo; l'Application &raquo;).
      </p>
      <p>
        Cette politique doit etre lue en complement de notre{' '}
        <a href="/privacy-policy">Politique de Confidentialite</a>.
      </p>

      <h2>2. Qu'est-ce qu'un cookie ?</h2>
      <p>
        Un cookie est un petit fichier texte depose sur votre appareil (ordinateur, telephone, tablette)
        lorsque vous visitez un site internet. Les cookies permettent au site de reconnaitre votre appareil
        et de memoriser certaines informations sur vos preferences ou actions precedentes.
      </p>
      <p>
        Les technologies similaires incluent le stockage local (localStorage), le stockage de session
        (sessionStorage), les pixels de suivi et les identifiants d'appareil.
      </p>

      <h2>3. Cookies et technologies utilises sur le Site</h2>
      <p>
        Notre Site est une page d'information statique qui utilise un minimum de technologies de stockage.
        Voici les technologies utilisees :
      </p>

      <h3>3.1. Stockage local (localStorage)</h3>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Finalite</th>
            <th>Type</th>
            <th>Duree</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>i18nextLng</code></td>
            <td>Memoriser votre preference de langue (francais/anglais) pour afficher le Site dans la langue choisie lors de votre prochaine visite</td>
            <td>Stockage local (localStorage)</td>
            <td>Persistant (jusqu'a effacement manuel)</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Aucun cookie tiers, cookie publicitaire ou outil d'analytics n'est utilise sur notre
        Site.</strong> Le stockage local de la preference de langue est strictement necessaire au bon
        fonctionnement du Site et ne necessite pas votre consentement prealable conformement a la
        directive ePrivacy.
      </p>

      <h2>4. Technologies utilisees dans l'Application mobile</h2>
      <p>
        L'Application mobile VoiceJournal AI utilise les technologies de suivi suivantes :
      </p>

      <h3>4.1. Firebase Analytics (Google LLC)</h3>
      <table>
        <thead>
          <tr>
            <th>Technologie</th>
            <th>Finalite</th>
            <th>Donnees collectees</th>
            <th>Duree de conservation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Firebase Analytics</td>
            <td>Analyser l'utilisation de l'Application de maniere anonymisee pour ameliorer les fonctionnalites et l'experience utilisateur</td>
            <td>Evenements d'utilisation, type d'appareil, OS, version de l'app, pays (anonymise)</td>
            <td>14 mois</td>
          </tr>
          <tr>
            <td>Firebase Crashlytics</td>
            <td>Detecter, diagnostiquer et corriger les crashs et erreurs de l'Application</td>
            <td>Donnees de crash (stack traces, appareil, OS), identifiant d'installation</td>
            <td>90 jours</td>
          </tr>
        </tbody>
      </table>

      <h3>4.2. Identifiants d'appareil</h3>
      <p>
        L'Application peut acceder a l'identifiant publicitaire de votre appareil (IDFA sur iOS, GAID sur
        Android) dans le cadre de Firebase Analytics. Vous pouvez desactiver ou reinitialiser cet
        identifiant dans les parametres de votre appareil :
      </p>
      <ul>
        <li><strong>iOS :</strong> Reglages &gt; Confidentialite et securite &gt; Suivi &gt; Desactiver &laquo; Autoriser les demandes de suivi &raquo;</li>
        <li><strong>Android :</strong> Parametres &gt; Google &gt; Annonces &gt; Desactiver la personnalisation des annonces</li>
      </ul>

      <h2>5. Base legale</h2>
      <p>
        Conformement au RGPD et a la directive ePrivacy (directive 2002/58/CE transposee en droit francais) :
      </p>
      <ul>
        <li>
          <strong>Stockage strictement necessaire :</strong> Le stockage de la preference de langue
          (localStorage) est exempt de consentement car il est strictement necessaire au bon fonctionnement
          du Site.
        </li>
        <li>
          <strong>Analytics et mesure d'audience :</strong> L'utilisation de Firebase Analytics dans
          l'Application est soumise a votre consentement. Vous pouvez gerer vos preferences lors de
          la premiere ouverture de l'Application ou dans les parametres de l'Application a tout moment.
        </li>
        <li>
          <strong>Crashlytics :</strong> La detection des crashs est fondee sur notre interet legitime
          a maintenir un service stable et fiable. Vous pouvez vous y opposer dans les parametres de
          l'Application.
        </li>
      </ul>

      <h2>6. Vos choix et controle</h2>
      <h3>6.1. Sur le Site</h3>
      <p>
        Le Site n'utilise aucun cookie necessitant votre consentement. Vous pouvez toutefois effacer
        les donnees de stockage local de votre navigateur a tout moment :
      </p>
      <ul>
        <li><strong>Chrome :</strong> Parametres &gt; Confidentialite et securite &gt; Effacer les donnees de navigation &gt; Cookies et autres donnees de sites</li>
        <li><strong>Firefox :</strong> Parametres &gt; Vie privee et securite &gt; Cookies et donnees de sites &gt; Effacer les donnees</li>
        <li><strong>Safari :</strong> Preferences &gt; Confidentialite &gt; Gerer les donnees de sites web</li>
      </ul>

      <h3>6.2. Dans l'Application</h3>
      <p>Vous pouvez gerer les technologies de suivi dans l'Application de plusieurs manieres :</p>
      <ul>
        <li><strong>Parametres de l'Application :</strong> Desactiver les analytics et/ou les rapports de crash dans les parametres de l'Application.</li>
        <li><strong>Parametres de l'appareil :</strong> Desactiver le suivi publicitaire dans les parametres de confidentialite de votre appareil (voir section 4.2).</li>
        <li><strong>Suppression du compte :</strong> La suppression de votre compte entraine l'effacement de toutes les donnees associees.</li>
      </ul>
      <p>
        <strong>Note :</strong> La desactivation de Crashlytics peut limiter notre capacite a detecter
        et corriger les problemes techniques affectant votre experience.
      </p>

      <h2>7. Cookies tiers</h2>
      <p>
        Les services tiers que nous utilisons (Firebase, Google) peuvent deposer leurs propres cookies
        ou utiliser des technologies similaires. Nous vous invitons a consulter leurs politiques de
        confidentialite respectives :
      </p>
      <ul>
        <li>
          <strong>Google (Firebase) :</strong>{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            policies.google.com/privacy
          </a>
        </li>
        <li>
          <strong>Google (Firebase Analytics) :</strong>{' '}
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
            firebase.google.com/support/privacy
          </a>
        </li>
      </ul>

      <h2>8. Modifications</h2>
      <p>
        Nous pouvons mettre a jour la presente Politique des Cookies a tout moment pour refleter des
        modifications de nos pratiques ou des exigences legales. La date de derniere mise a jour est
        indiquee en haut de cette page.
      </p>
      <p>
        En cas de modifications substantielles, nous vous en informerons par le biais de l'Application
        ou du Site.
      </p>

      <h2>9. Contact</h2>
      <p>
        Pour toute question relative a la presente Politique des Cookies ou a l'utilisation de
        technologies de suivi, veuillez nous contacter :
      </p>
      <ul>
        <li><strong>Email :</strong> support@voicejournalai.com</li>
        <li><strong>Responsable :</strong> SAWADOGO Badini Ibrahim</li>
        <li><strong>Adresse :</strong> Cergy, France</li>
      </ul>
    </>
  )
}

function CookiePolicyEN() {
  return (
    <>
      <h1>Cookie Policy</h1>
      <p className="text-text-muted/70 text-sm !mb-8">Last updated: March 31, 2026</p>

      <h2>1. Introduction</h2>
      <p>
        This Cookie Policy explains how <strong>SAWADOGO Badini Ibrahim</strong> (hereinafter "we") uses cookies
        and similar technologies on the VoiceJournal AI website (hereinafter the "Website") and in the
        VoiceJournal AI mobile application (hereinafter the "Application").
      </p>
      <p>
        This policy should be read in conjunction with our{' '}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>2. What are Cookies?</h2>
      <p>
        A cookie is a small text file placed on your device (computer, phone, tablet) when you visit a
        website. Cookies allow the website to recognize your device and remember certain information
        about your preferences or previous actions.
      </p>
      <p>
        Similar technologies include local storage (localStorage), session storage (sessionStorage),
        tracking pixels, and device identifiers.
      </p>

      <h2>3. Cookies and Technologies Used on the Website</h2>
      <p>
        Our Website is a static informational page that uses minimal storage technologies. Here are the
        technologies in use:
      </p>

      <h3>3.1. Local Storage (localStorage)</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Purpose</th>
            <th>Type</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>i18nextLng</code></td>
            <td>Remember your language preference (French/English) to display the Website in your chosen language on your next visit</td>
            <td>Local storage (localStorage)</td>
            <td>Persistent (until manually cleared)</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>No third-party cookies, advertising cookies, or analytics tools are used on our
        Website.</strong> The local storage of language preference is strictly necessary for the proper
        functioning of the Website and does not require your prior consent under the ePrivacy Directive.
      </p>

      <h2>4. Technologies Used in the Mobile Application</h2>
      <p>
        The VoiceJournal AI mobile application uses the following tracking technologies:
      </p>

      <h3>4.1. Firebase Analytics (Google LLC)</h3>
      <table>
        <thead>
          <tr>
            <th>Technology</th>
            <th>Purpose</th>
            <th>Data Collected</th>
            <th>Retention Period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Firebase Analytics</td>
            <td>Analyze Application usage in an anonymized manner to improve features and user experience</td>
            <td>Usage events, device type, OS, app version, country (anonymized)</td>
            <td>14 months</td>
          </tr>
          <tr>
            <td>Firebase Crashlytics</td>
            <td>Detect, diagnose, and fix Application crashes and errors</td>
            <td>Crash data (stack traces, device, OS), installation identifier</td>
            <td>90 days</td>
          </tr>
        </tbody>
      </table>

      <h3>4.2. Device Identifiers</h3>
      <p>
        The Application may access your device's advertising identifier (IDFA on iOS, GAID on Android)
        as part of Firebase Analytics. You can disable or reset this identifier in your device settings:
      </p>
      <ul>
        <li><strong>iOS:</strong> Settings &gt; Privacy & Security &gt; Tracking &gt; Disable "Allow Apps to Request to Track"</li>
        <li><strong>Android:</strong> Settings &gt; Google &gt; Ads &gt; Opt out of Ads Personalization</li>
      </ul>

      <h2>5. Legal Basis</h2>
      <p>
        In accordance with the GDPR and the ePrivacy Directive (Directive 2002/58/EC):
      </p>
      <ul>
        <li>
          <strong>Strictly necessary storage:</strong> The language preference storage (localStorage)
          is exempt from consent as it is strictly necessary for the proper functioning of the Website.
        </li>
        <li>
          <strong>Analytics and audience measurement:</strong> The use of Firebase Analytics in the
          Application is subject to your consent. You can manage your preferences upon first opening
          the Application or in the Application settings at any time.
        </li>
        <li>
          <strong>Crashlytics:</strong> Crash detection is based on our legitimate interest in
          maintaining a stable and reliable service. You may object in the Application settings.
        </li>
      </ul>

      <h2>6. Your Choices and Control</h2>
      <h3>6.1. On the Website</h3>
      <p>
        The Website does not use any cookies requiring your consent. You may, however, clear your
        browser's local storage data at any time:
      </p>
      <ul>
        <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Clear browsing data &gt; Cookies and other site data</li>
        <li><strong>Firefox:</strong> Settings &gt; Privacy & Security &gt; Cookies and Site Data &gt; Clear Data</li>
        <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
      </ul>

      <h3>6.2. In the Application</h3>
      <p>You can manage tracking technologies in the Application in several ways:</p>
      <ul>
        <li><strong>Application settings:</strong> Disable analytics and/or crash reports in the Application settings.</li>
        <li><strong>Device settings:</strong> Disable advertising tracking in your device's privacy settings (see section 4.2).</li>
        <li><strong>Account deletion:</strong> Deleting your account results in erasure of all associated data.</li>
      </ul>
      <p>
        <strong>Note:</strong> Disabling Crashlytics may limit our ability to detect and fix technical
        issues affecting your experience.
      </p>

      <h2>7. Third-Party Cookies</h2>
      <p>
        Third-party services we use (Firebase, Google) may set their own cookies or use similar
        technologies. We encourage you to review their respective privacy policies:
      </p>
      <ul>
        <li>
          <strong>Google (Firebase):</strong>{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            policies.google.com/privacy
          </a>
        </li>
        <li>
          <strong>Google (Firebase Analytics):</strong>{' '}
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
            firebase.google.com/support/privacy
          </a>
        </li>
      </ul>

      <h2>8. Changes</h2>
      <p>
        We may update this Cookie Policy at any time to reflect changes in our practices or legal
        requirements. The last updated date is shown at the top of this page.
      </p>
      <p>
        In the event of substantial changes, we will inform you through the Application or the Website.
      </p>

      <h2>9. Contact</h2>
      <p>
        For any questions regarding this Cookie Policy or the use of tracking technologies, please
        contact us:
      </p>
      <ul>
        <li><strong>Email:</strong> support@voicejournalai.com</li>
        <li><strong>Controller:</strong> SAWADOGO Badini Ibrahim</li>
        <li><strong>Address:</strong> Cergy, France</li>
      </ul>
    </>
  )
}
