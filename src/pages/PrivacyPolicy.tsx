import { useTranslation } from "react-i18next";

export function PrivacyPolicy() {
  const { i18n } = useTranslation();
  const fr = i18n.language?.startsWith("fr");

  return fr ? <PrivacyPolicyFR /> : <PrivacyPolicyEN />;
}

function PrivacyPolicyFR() {
  return (
    <>
      <h1>Politique de Confidentialite</h1>
      <p className="text-text-muted/70 text-sm !mb-8">
        Derniere mise a jour : 31 mars 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        La presente Politique de Confidentialite decrit la maniere dont{" "}
        <strong>SAWADOGO Badini Ibrahim</strong>, personne physique dont le
        siege est situe a <strong>Cergy</strong>, France (ci-apres &laquo; nous
        &raquo;, &laquo; notre &raquo; ou &laquo; le Responsable du traitement
        &raquo;), collecte, utilise, stocke et protege vos donnees personnelles
        lorsque vous utilisez l'application mobile VoiceJournal AI (ci-apres
        &laquo; l'Application &raquo;) et le site internet associe (ci-apres
        &laquo; le Site &raquo;).
      </p>
      <p>
        Nous nous engageons a proteger votre vie privee conformement au
        Reglement General sur la Protection des Donnees (RGPD - Reglement UE
        2016/679), a la loi francaise Informatique et Libertes du 6 janvier 1978
        modifiee, et a toute legislation applicable en matiere de protection des
        donnees.
      </p>
      <p>
        En utilisant notre Application ou notre Site, vous reconnaissez avoir
        pris connaissance de la presente politique. Si vous n'acceptez pas ces
        conditions, veuillez ne pas utiliser nos services.
      </p>

      <h2>2. Responsable du traitement</h2>
      <p>Le responsable du traitement de vos donnees personnelles est :</p>
      <ul>
        <li>
          <strong>Nom :</strong> SAWADOGO Badini Ibrahim
        </li>
        <li>
          <strong>Adresse :</strong> Cergy, France
        </li>
        <li>
          <strong>Email :</strong> support@voicejournalai.fr
        </li>
      </ul>
      <p>
        Pour toute question relative a la protection de vos donnees
        personnelles, vous pouvez nous contacter a l'adresse email ci-dessus.
      </p>

      <h2>3. Donnees personnelles collectees</h2>
      <p>
        Nous collectons et traitons les categories de donnees personnelles
        suivantes dans le cadre de la fourniture de nos services :
      </p>

      <h3>3.1. Donnees de compte</h3>
      <ul>
        <li>Adresse email</li>
        <li>Nom d'utilisateur ou prenom (si fourni)</li>
        <li>Identifiant de compte unique</li>
        <li>Preferences de l'application (langue, theme)</li>
      </ul>

      <h3>3.2. Enregistrements vocaux</h3>
      <ul>
        <li>
          Fichiers audio enregistres via l'Application (duree : 10 secondes a 10
          minutes par session)
        </li>
        <li>
          Transcriptions textuelles generees a partir de vos enregistrements
          vocaux par notre systeme d'IA
        </li>
      </ul>

      <h3>3.3. Donnees d'analyse emotionnelle</h3>
      <ul>
        <li>
          Emotions detectees par l'IA (joie, tristesse, colere, peur, surprise,
          degout)
        </li>
        <li>Score d'humeur (echelle de 1 a 10)</li>
        <li>Insights et suggestions personnalises generes par l'IA</li>
        <li>Rapports hebdomadaires de tendances emotionnelles</li>
      </ul>

      <h3>3.4. Donnees d'utilisation</h3>
      <ul>
        <li>Series de journaling (streaks) et historique de frequence</li>
        <li>Badges et recompenses obtenus</li>
        <li>Nombre et dates des entrees de journal</li>
        <li>Preferences de themes de couleur</li>
      </ul>

      <h3>3.5. Donnees techniques et analytiques</h3>
      <ul>
        <li>Type et modele d'appareil, systeme d'exploitation et version</li>
        <li>Identifiant publicitaire de l'appareil (IDFA/GAID)</li>
        <li>Adresse IP (anonymisee)</li>
        <li>
          Donnees de performance de l'application (crashs, temps de chargement)
          via Firebase Crashlytics
        </li>
        <li>Donnees d'utilisation anonymisees via Firebase Analytics</li>
      </ul>

      <h3>3.6. Donnees de paiement</h3>
      <p>
        Les paiements pour l'abonnement Pro sont geres exclusivement par l'App
        Store (Apple) ou Google Play (Google).{" "}
        <strong>
          Nous n'avons pas acces a vos informations de carte bancaire ou de
          paiement.
        </strong>{" "}
        Nous recevons uniquement une confirmation de l'etat de votre abonnement
        (actif, expire, en essai) de la part de ces plateformes.
      </p>

      <h2>4. Bases legales du traitement (Article 6 du RGPD)</h2>
      <p>
        Nous traitons vos donnees personnelles sur les bases legales suivantes :
      </p>
      <table>
        <thead>
          <tr>
            <th>Finalite</th>
            <th>Base legale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Fourniture du service (enregistrement, transcription, analyse IA)
            </td>
            <td>Execution du contrat (Art. 6.1.b)</td>
          </tr>
          <tr>
            <td>Gestion du compte et authentification</td>
            <td>Execution du contrat (Art. 6.1.b)</td>
          </tr>
          <tr>
            <td>Gestion des abonnements et facturation</td>
            <td>Execution du contrat (Art. 6.1.b)</td>
          </tr>
          <tr>
            <td>Amelioration de l'Application et correction de bugs</td>
            <td>Interet legitime (Art. 6.1.f)</td>
          </tr>
          <tr>
            <td>Analyse d'utilisation (Firebase Analytics)</td>
            <td>Consentement (Art. 6.1.a)</td>
          </tr>
          <tr>
            <td>Detection et correction des crashs (Crashlytics)</td>
            <td>Interet legitime (Art. 6.1.f)</td>
          </tr>
          <tr>
            <td>
              Communications relatives au service (mises a jour, securite)
            </td>
            <td>Interet legitime (Art. 6.1.f)</td>
          </tr>
          <tr>
            <td>Respect des obligations legales</td>
            <td>Obligation legale (Art. 6.1.c)</td>
          </tr>
        </tbody>
      </table>

      <h2>5. Utilisation de vos donnees</h2>
      <p>
        Vos donnees personnelles sont utilisees pour les finalites suivantes :
      </p>
      <ul>
        <li>
          <strong>Fourniture du service :</strong> Enregistrer vos entrees
          vocales, les transcrire, analyser vos emotions et generer des insights
          personnalises.
        </li>
        <li>
          <strong>Personnalisation :</strong> Adapter les suggestions, les
          questions du jour et les rapports hebdomadaires a votre profil
          emotionnel.
        </li>
        <li>
          <strong>Gestion de compte :</strong> Creer et maintenir votre compte,
          gerer votre abonnement.
        </li>
        <li>
          <strong>Amelioration du service :</strong> Analyser l'utilisation de
          facon anonymisee pour ameliorer les fonctionnalites et corriger les
          bugs.
        </li>
        <li>
          <strong>Securite :</strong> Proteger nos services contre les
          utilisations frauduleuses ou abusives.
        </li>
        <li>
          <strong>Obligations legales :</strong> Repondre aux demandes des
          autorites competentes lorsque la loi l'exige.
        </li>
      </ul>
      <p>
        <strong>Nous ne vendons jamais vos donnees personnelles.</strong> Nous
        ne lisons pas le contenu de vos entrees de journal. Vos enregistrements
        vocaux et transcriptions sont traites de maniere automatisee par notre
        systeme d'IA et ne sont pas accessibles a nos equipes, sauf obligation
        legale.
      </p>

      <h2>6. Partage de donnees avec des tiers</h2>
      <p>
        Nous partageons certaines donnees avec des prestataires de services
        tiers dans le cadre strict de la fourniture de nos services. Ces
        prestataires agissent en tant que sous-traitants au sens du RGPD et sont
        contractuellement tenus de proteger vos donnees.
      </p>
      <table>
        <thead>
          <tr>
            <th>Prestataire</th>
            <th>Finalite</th>
            <th>Donnees partagees</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Firebase (Google LLC)</strong>
            </td>
            <td>
              Authentification, base de donnees, stockage de fichiers,
              analytics, crashlytics
            </td>
            <td>
              Donnees de compte, enregistrements vocaux, transcriptions, donnees
              d'utilisation, donnees techniques
            </td>
          </tr>
          <tr>
            <td>
              <strong>Google Gemini (Google LLC)</strong>
            </td>
            <td>Transcription vocale et analyse emotionnelle par IA</td>
            <td>Enregistrements vocaux, transcriptions</td>
          </tr>
          <tr>
            <td>
              <strong>Apple (App Store)</strong>
            </td>
            <td>
              Distribution de l'application, gestion des abonnements et
              paiements
            </td>
            <td>Donnees d'abonnement</td>
          </tr>
          <tr>
            <td>
              <strong>Google (Google Play)</strong>
            </td>
            <td>
              Distribution de l'application, gestion des abonnements et
              paiements
            </td>
            <td>Donnees d'abonnement</td>
          </tr>
          <tr>
            <td>
              <strong>RevenueCat</strong>
            </td>
            <td>Gestion et verification des abonnements</td>
            <td>Identifiant utilisateur, statut d'abonnement</td>
          </tr>
        </tbody>
      </table>
      <p>
        Nous pouvons egalement etre amenes a divulguer vos donnees si la loi
        l'exige, dans le cadre d'une procedure judiciaire, ou pour proteger nos
        droits et la securite de nos utilisateurs.
      </p>

      <h2>7. Transferts internationaux de donnees</h2>
      <p>
        Certains de nos prestataires (notamment Google LLC et RevenueCat) sont
        situes aux Etats-Unis. Vos donnees peuvent donc etre transferees en
        dehors de l'Espace Economique Europeen (EEE).
      </p>
      <p>
        Ces transferts sont encadres par des garanties appropriees conformement
        au RGPD, notamment :
      </p>
      <ul>
        <li>
          Les Clauses Contractuelles Types (CCT) approuvees par la Commission
          europeenne
        </li>
        <li>
          Les decisions d'adequation de la Commission europeenne lorsqu'elles
          s'appliquent
        </li>
        <li>
          Les engagements complementaires de nos prestataires en matiere de
          protection des donnees
        </li>
      </ul>
      <p>
        Vous pouvez obtenir une copie des garanties appropriees en nous
        contactant a l'adresse indiquee dans la section &laquo; Contact &raquo;.
      </p>

      <h2>8. Duree de conservation</h2>
      <table>
        <thead>
          <tr>
            <th>Type de donnees</th>
            <th>Duree de conservation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Donnees de compte</td>
            <td>Duree de vie du compte + 30 jours apres suppression</td>
          </tr>
          <tr>
            <td>Enregistrements vocaux et transcriptions</td>
            <td>
              Duree de vie du compte (supprimables individuellement par
              l'utilisateur)
            </td>
          </tr>
          <tr>
            <td>Donnees d'analyse emotionnelle</td>
            <td>Duree de vie du compte</td>
          </tr>
          <tr>
            <td>Donnees d'utilisation (streaks, badges)</td>
            <td>Duree de vie du compte</td>
          </tr>
          <tr>
            <td>Donnees analytiques (Firebase Analytics)</td>
            <td>14 mois (parametrage Firebase par defaut)</td>
          </tr>
          <tr>
            <td>Donnees de crash (Crashlytics)</td>
            <td>90 jours</td>
          </tr>
          <tr>
            <td>Donnees de facturation/abonnement</td>
            <td>Selon les obligations legales comptables (10 ans en France)</td>
          </tr>
        </tbody>
      </table>
      <p>
        A l'expiration de ces delais, vos donnees sont supprimees ou anonymisees
        de facon irreversible.
      </p>

      <h2>9. Securite des donnees</h2>
      <p>
        Nous mettons en oeuvre des mesures techniques et organisationnelles
        appropriees pour proteger vos donnees personnelles contre l'acces non
        autorise, la perte, l'alteration ou la divulgation, notamment :
      </p>
      <ul>
        <li>Chiffrement des donnees en transit (TLS/SSL) et au repos</li>
        <li>
          Chiffrement de bout en bout des enregistrements vocaux et
          transcriptions sur Firebase
        </li>
        <li>Authentification securisee via Firebase Authentication</li>
        <li>
          Regles de securite strictes sur les bases de donnees (chaque
          utilisateur n'accede qu'a ses propres donnees)
        </li>
        <li>
          Acces limite aux donnees pour les prestataires, selon le principe du
          moindre privilege
        </li>
        <li>Surveillance continue de la securite de l'infrastructure</li>
      </ul>
      <p>
        Malgre nos efforts, aucun systeme ne peut garantir une securite absolue.
        En cas de violation de donnees susceptible d'engendrer un risque eleve
        pour vos droits et libertes, nous vous en informerons dans les meilleurs
        delais, ainsi que la CNIL dans les 72 heures, conformement au RGPD.
      </p>

      <h2>10. Vos droits</h2>
      <p>
        Conformement au RGPD et a la loi Informatique et Libertes, vous disposez
        des droits suivants concernant vos donnees personnelles :
      </p>
      <ul>
        <li>
          <strong>Droit d'acces (Art. 15) :</strong> Obtenir la confirmation que
          vos donnees sont traitees et en recevoir une copie.
        </li>
        <li>
          <strong>Droit de rectification (Art. 16) :</strong> Faire corriger des
          donnees inexactes ou incompletes.
        </li>
        <li>
          <strong>Droit a l'effacement (Art. 17) :</strong> Demander la
          suppression de vos donnees dans les conditions prevues par la loi.
        </li>
        <li>
          <strong>Droit a la limitation du traitement (Art. 18) :</strong>{" "}
          Demander la suspension du traitement dans certains cas.
        </li>
        <li>
          <strong>Droit a la portabilite (Art. 20) :</strong> Recevoir vos
          donnees dans un format structure, couramment utilise et lisible par
          machine.
        </li>
        <li>
          <strong>Droit d'opposition (Art. 21) :</strong> Vous opposer au
          traitement fonde sur l'interet legitime, y compris le profilage.
        </li>
        <li>
          <strong>Droit de retrait du consentement :</strong> Retirer votre
          consentement a tout moment, sans affecter la liceit du traitement
          effectue avant le retrait.
        </li>
        <li>
          <strong>Droit de definir des directives post-mortem :</strong> Definir
          des directives relatives a la conservation, l'effacement et la
          communication de vos donnees apres votre deces (droit francais).
        </li>
      </ul>
      <p>
        Pour exercer ces droits, contactez-nous a :{" "}
        <strong>support@voicejournalai.fr</strong>. Nous repondrons dans un
        delai d'un mois. Ce delai peut etre prolonge de deux mois en cas de
        demandes complexes ou nombreuses.
      </p>
      <p>
        Vous disposez egalement du droit d'introduire une reclamation aupres de
        la Commission Nationale de l'Informatique et des Libertes (CNIL) :
      </p>
      <ul>
        <li>
          <strong>Site web :</strong>{" "}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.cnil.fr
          </a>
        </li>
        <li>
          <strong>Adresse :</strong> 3 Place de Fontenoy, TSA 80715, 75334 Paris
          Cedex 07
        </li>
      </ul>

      <h2>11. Prise de decision automatisee</h2>
      <p>
        Notre Application utilise des systemes d'intelligence artificielle
        (Google Gemini) pour analyser vos enregistrements vocaux et generer des
        insights emotionnels. Ce traitement automatise :
      </p>
      <ul>
        <li>
          N'a aucun effet juridique sur vous et ne vous affecte pas de maniere
          significative similaire
        </li>
        <li>
          Est realise dans le cadre de l'execution du contrat que vous avez
          accepte en utilisant le service
        </li>
        <li>
          Ne produit que des suggestions et observations a titre informatif
        </li>
      </ul>
      <p>
        Vous pouvez a tout moment contester une analyse ou demander une
        intervention humaine en nous contactant.
      </p>

      <h2>12. Protection des mineurs</h2>
      <p>
        VoiceJournal AI n'est pas destine aux personnes agees de moins de 16
        ans. Nous ne collectons pas sciemment de donnees personnelles aupres de
        mineurs de moins de 16 ans. Si nous decouvrons que nous avons collecte
        des donnees d'un mineur sans le consentement parental requis, nous
        supprimerons ces donnees dans les plus brefs delais.
      </p>
      <p>
        Si vous etes parent ou tuteur et que vous pensez que votre enfant nous a
        fourni des donnees personnelles, veuillez nous contacter immediatement a
        support@voicejournalai.fr.
      </p>

      <h2>13. Avertissement relatif a la sante</h2>
      <p>
        <strong>
          VoiceJournal AI n'est pas un dispositif medical et ne fournit pas de
          conseils medicaux, psychologiques ou therapeutiques.
        </strong>{" "}
        Les analyses emotionnelles, scores d'humeur et suggestions generes par
        l'IA sont fournis a titre informatif uniquement et ne sauraient se
        substituer a un diagnostic ou un avis professionnel.
      </p>
      <p>
        Si vous etes en detresse emotionnelle ou psychologique, nous vous
        encourageons vivement a consulter un professionnel de sante qualifie. En
        cas d'urgence, contactez les services d'urgence de votre pays (15, 114
        ou 112 en France).
      </p>

      <h2>14. Modifications de la politique</h2>
      <p>
        Nous pouvons modifier la presente Politique de Confidentialite a tout
        moment. En cas de modification substantielle, nous vous en informerons
        par notification dans l'Application ou par email avant l'entree en
        vigueur des changements.
      </p>
      <p>
        La date de derniere mise a jour est indiquee en haut de cette page. Nous
        vous invitons a consulter regulierement cette politique. La poursuite de
        l'utilisation de nos services apres la publication des modifications
        vaut acceptation de la politique mise a jour.
      </p>

      <h2>15. Contact</h2>
      <p>
        Pour toute question ou demande relative a la presente Politique de
        Confidentialite ou a vos donnees personnelles, veuillez nous contacter :
      </p>
      <ul>
        <li>
          <strong>Email :</strong> support@voicejournalai.fr
        </li>
        <li>
          <strong>Responsable du traitement :</strong> SAWADOGO Badini Ibrahim
        </li>
        <li>
          <strong>Adresse :</strong> Cergy, France
        </li>
      </ul>
    </>
  );
}

function PrivacyPolicyEN() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="text-text-muted/70 text-sm !mb-8">
        Last updated: March 31, 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy describes how{" "}
        <strong>SAWADOGO Badini Ibrahim</strong>, an individual based in{" "}
        <strong>Cergy</strong>, France (hereinafter "we", "our", or the "Data
        Controller"), collects, uses, stores, and protects your personal data
        when you use the VoiceJournal AI mobile application (hereinafter the
        "Application") and the associated website (hereinafter the "Website").
      </p>
      <p>
        We are committed to protecting your privacy in accordance with the
        General Data Protection Regulation (GDPR - EU Regulation 2016/679), the
        French Data Protection Act of January 6, 1978 as amended, and all
        applicable data protection legislation.
      </p>
      <p>
        By using our Application or Website, you acknowledge that you have read
        this policy. If you do not accept these terms, please do not use our
        services.
      </p>

      <h2>2. Data Controller</h2>
      <p>The data controller for your personal data is:</p>
      <ul>
        <li>
          <strong>Name:</strong> SAWADOGO Badini Ibrahim
        </li>
        <li>
          <strong>Address:</strong> Cergy, France
        </li>
        <li>
          <strong>Email:</strong> support@voicejournalai.fr
        </li>
      </ul>
      <p>
        For any questions regarding the protection of your personal data, you
        may contact us at the email address above.
      </p>

      <h2>3. Personal Data Collected</h2>
      <p>
        We collect and process the following categories of personal data in
        order to provide our services:
      </p>

      <h3>3.1. Account Data</h3>
      <ul>
        <li>Email address</li>
        <li>Username or first name (if provided)</li>
        <li>Unique account identifier</li>
        <li>Application preferences (language, theme)</li>
      </ul>

      <h3>3.2. Voice Recordings</h3>
      <ul>
        <li>
          Audio files recorded through the Application (duration: 10 seconds to
          10 minutes per session)
        </li>
        <li>
          Text transcriptions generated from your voice recordings by our AI
          system
        </li>
      </ul>

      <h3>3.3. Emotional Analysis Data</h3>
      <ul>
        <li>
          Emotions detected by AI (joy, sadness, anger, fear, surprise, disgust)
        </li>
        <li>Mood score (scale of 1 to 10)</li>
        <li>Personalized insights and suggestions generated by AI</li>
        <li>Weekly emotional trend reports</li>
      </ul>

      <h3>3.4. Usage Data</h3>
      <ul>
        <li>Journaling streaks and frequency history</li>
        <li>Badges and achievements earned</li>
        <li>Number and dates of journal entries</li>
        <li>Color theme preferences</li>
      </ul>

      <h3>3.5. Technical and Analytics Data</h3>
      <ul>
        <li>IP address (anonymized)</li>
        <li>
          Application performance data (crashes, load times) via Firebase
          Crashlytics
        </li>
        <li>Anonymized usage data via Firebase Analytics</li>
      </ul>

      <h3>3.6. Payment Data</h3>
      <p>
        Payments for the Pro subscription are handled exclusively by the App
        Store (Apple) or Google Play (Google).{" "}
        <strong>
          We do not have access to your credit card or payment information.
        </strong>{" "}
        We only receive confirmation of your subscription status (active,
        expired, trial) from these platforms.
      </p>

      <h2>4. Legal Basis for Processing (GDPR Article 6)</h2>
      <p>We process your personal data on the following legal bases:</p>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Legal Basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Service delivery (recording, transcription, AI analysis)</td>
            <td>Performance of contract (Art. 6.1.b)</td>
          </tr>
          <tr>
            <td>Account management and authentication</td>
            <td>Performance of contract (Art. 6.1.b)</td>
          </tr>
          <tr>
            <td>Subscription management and billing</td>
            <td>Performance of contract (Art. 6.1.b)</td>
          </tr>
          <tr>
            <td>Application improvement and bug fixes</td>
            <td>Legitimate interest (Art. 6.1.f)</td>
          </tr>
          <tr>
            <td>Usage analytics (Firebase Analytics)</td>
            <td>Consent (Art. 6.1.a)</td>
          </tr>
          <tr>
            <td>Crash detection and resolution (Crashlytics)</td>
            <td>Legitimate interest (Art. 6.1.f)</td>
          </tr>
          <tr>
            <td>Service-related communications (updates, security)</td>
            <td>Legitimate interest (Art. 6.1.f)</td>
          </tr>
          <tr>
            <td>Compliance with legal obligations</td>
            <td>Legal obligation (Art. 6.1.c)</td>
          </tr>
        </tbody>
      </table>

      <h2>5. Use of Your Data</h2>
      <p>Your personal data is used for the following purposes:</p>
      <ul>
        <li>
          <strong>Service delivery:</strong> Record your voice entries,
          transcribe them, analyze your emotions, and generate personalized
          insights.
        </li>
        <li>
          <strong>Personalization:</strong> Tailor suggestions, daily prompts,
          and weekly reports to your emotional profile.
        </li>
        <li>
          <strong>Account management:</strong> Create and maintain your account,
          manage your subscription.
        </li>
        <li>
          <strong>Service improvement:</strong> Analyze usage in an anonymized
          manner to improve features and fix bugs.
        </li>
        <li>
          <strong>Security:</strong> Protect our services against fraudulent or
          abusive use.
        </li>
        <li>
          <strong>Legal obligations:</strong> Respond to requests from competent
          authorities when required by law.
        </li>
      </ul>
      <p>
        <strong>We never sell your personal data.</strong> We do not read the
        content of your journal entries. Your voice recordings and
        transcriptions are processed automatically by our AI system and are not
        accessible to our team, except as required by law.
      </p>

      <h2>6. Data Sharing with Third Parties</h2>
      <p>
        We share certain data with third-party service providers strictly for
        the purpose of delivering our services. These providers act as data
        processors under the GDPR and are contractually bound to protect your
        data.
      </p>
      <table>
        <thead>
          <tr>
            <th>Provider</th>
            <th>Purpose</th>
            <th>Data Shared</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Firebase (Google LLC)</strong>
            </td>
            <td>
              Authentication, database, file storage, analytics, crashlytics
            </td>
            <td>
              Account data, voice recordings, transcriptions, usage data,
              technical data
            </td>
          </tr>
          <tr>
            <td>
              <strong>Google Gemini (Google LLC)</strong>
            </td>
            <td>Voice transcription and AI emotional analysis</td>
            <td>Voice recordings, transcriptions</td>
          </tr>
          <tr>
            <td>
              <strong>Apple (App Store)</strong>
            </td>
            <td>
              Application distribution, subscription and payment management
            </td>
            <td>Subscription data</td>
          </tr>
          <tr>
            <td>
              <strong>Google (Google Play)</strong>
            </td>
            <td>
              Application distribution, subscription and payment management
            </td>
            <td>Subscription data</td>
          </tr>
          <tr>
            <td>
              <strong>RevenueCat</strong>
            </td>
            <td>Subscription management and verification</td>
            <td>User identifier, subscription status</td>
          </tr>
        </tbody>
      </table>
      <p>
        We may also disclose your data if required by law, in connection with
        legal proceedings, or to protect our rights and the safety of our users.
      </p>

      <h2>7. International Data Transfers</h2>
      <p>
        Some of our service providers (notably Google LLC and RevenueCat) are
        located in the United States. Your data may therefore be transferred
        outside the European Economic Area (EEA).
      </p>
      <p>
        Such transfers are governed by appropriate safeguards in accordance with
        the GDPR, including:
      </p>
      <ul>
        <li>
          Standard Contractual Clauses (SCCs) approved by the European
          Commission
        </li>
        <li>Adequacy decisions by the European Commission where applicable</li>
        <li>
          Supplementary commitments from our providers regarding data protection
        </li>
      </ul>
      <p>
        You may obtain a copy of the appropriate safeguards by contacting us at
        the address provided in the "Contact" section.
      </p>

      <h2>8. Data Retention</h2>
      <table>
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Retention Period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account data</td>
            <td>Account lifetime + 30 days after deletion</td>
          </tr>
          <tr>
            <td>Voice recordings and transcriptions</td>
            <td>Account lifetime (individually deletable by user)</td>
          </tr>
          <tr>
            <td>Emotional analysis data</td>
            <td>Account lifetime</td>
          </tr>
          <tr>
            <td>Usage data (streaks, badges)</td>
            <td>Account lifetime</td>
          </tr>
          <tr>
            <td>Analytics data (Firebase Analytics)</td>
            <td>14 months (Firebase default setting)</td>
          </tr>
          <tr>
            <td>Crash data (Crashlytics)</td>
            <td>90 days</td>
          </tr>
          <tr>
            <td>Billing/subscription data</td>
            <td>As required by French accounting law (10 years)</td>
          </tr>
        </tbody>
      </table>
      <p>
        Upon expiration of these periods, your data is deleted or irreversibly
        anonymized.
      </p>

      <h2>9. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to
        protect your personal data against unauthorized access, loss,
        alteration, or disclosure, including:
      </p>
      <ul>
        <li>Encryption of data in transit (TLS/SSL) and at rest</li>
        <li>
          End-to-end encryption of voice recordings and transcriptions on
          Firebase
        </li>
        <li>Secure authentication via Firebase Authentication</li>
        <li>
          Strict database security rules (each user can only access their own
          data)
        </li>
        <li>Limited data access for providers on a need-to-know basis</li>
        <li>Continuous security monitoring of infrastructure</li>
      </ul>
      <p>
        Despite our best efforts, no system can guarantee absolute security. In
        the event of a data breach likely to result in a high risk to your
        rights and freedoms, we will notify you as soon as possible and inform
        the CNIL within 72 hours, as required by the GDPR.
      </p>

      <h2>10. Your Rights</h2>
      <p>
        Under the GDPR and the French Data Protection Act, you have the
        following rights regarding your personal data:
      </p>
      <ul>
        <li>
          <strong>Right of access (Art. 15):</strong> Obtain confirmation that
          your data is being processed and receive a copy.
        </li>
        <li>
          <strong>Right to rectification (Art. 16):</strong> Have inaccurate or
          incomplete data corrected.
        </li>
        <li>
          <strong>Right to erasure (Art. 17):</strong> Request deletion of your
          data under the conditions provided by law.
        </li>
        <li>
          <strong>Right to restriction (Art. 18):</strong> Request suspension of
          processing in certain cases.
        </li>
        <li>
          <strong>Right to portability (Art. 20):</strong> Receive your data in
          a structured, commonly used, machine-readable format.
        </li>
        <li>
          <strong>Right to object (Art. 21):</strong> Object to processing based
          on legitimate interest, including profiling.
        </li>
        <li>
          <strong>Right to withdraw consent:</strong> Withdraw your consent at
          any time, without affecting the lawfulness of processing carried out
          prior to withdrawal.
        </li>
        <li>
          <strong>Right to define post-mortem directives:</strong> Define
          directives regarding the retention, deletion, and communication of
          your data after your death (French law).
        </li>
      </ul>
      <p>
        To exercise these rights, contact us at:{" "}
        <strong>support@voicejournalai.fr</strong>. We will respond within one
        month. This period may be extended by two months for complex or numerous
        requests.
      </p>
      <p>
        You also have the right to lodge a complaint with the French data
        protection authority (CNIL):
      </p>
      <ul>
        <li>
          <strong>Website:</strong>{" "}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.cnil.fr
          </a>
        </li>
        <li>
          <strong>Address:</strong> 3 Place de Fontenoy, TSA 80715, 75334 Paris
          Cedex 07
        </li>
      </ul>

      <h2>11. Automated Decision-Making</h2>
      <p>
        Our Application uses artificial intelligence systems (Google Gemini) to
        analyze your voice recordings and generate emotional insights. This
        automated processing:
      </p>
      <ul>
        <li>
          Has no legal effect on you and does not similarly significantly affect
          you
        </li>
        <li>
          Is carried out in the context of performing the contract you accepted
          by using the service
        </li>
        <li>
          Only produces suggestions and observations for informational purposes
        </li>
      </ul>
      <p>
        You may at any time contest an analysis or request human intervention by
        contacting us.
      </p>

      <h2>12. Children's Privacy</h2>
      <p>
        VoiceJournal AI is not intended for individuals under the age of 16. We
        do not knowingly collect personal data from minors under 16. If we
        discover that we have collected data from a minor without the required
        parental consent, we will delete such data as soon as possible.
      </p>
      <p>
        If you are a parent or guardian and believe your child has provided us
        with personal data, please contact us immediately at
        support@voicejournalai.fr.
      </p>

      <h2>13. Health Disclaimer</h2>
      <p>
        <strong>
          VoiceJournal AI is not a medical device and does not provide medical,
          psychological, or therapeutic advice.
        </strong>{" "}
        Emotional analyses, mood scores, and AI-generated suggestions are
        provided for informational purposes only and should not be considered a
        substitute for professional diagnosis or advice.
      </p>
      <p>
        If you are in emotional or psychological distress, we strongly encourage
        you to consult a qualified healthcare professional. In case of
        emergency, contact your local emergency services (15, 114, or 112 in
        France).
      </p>

      <h2>14. Policy Changes</h2>
      <p>
        We may modify this Privacy Policy at any time. In the event of a
        substantial change, we will inform you by notification in the
        Application or by email before the changes take effect.
      </p>
      <p>
        The last updated date is shown at the top of this page. We encourage you
        to review this policy regularly. Continued use of our services after the
        publication of changes constitutes acceptance of the updated policy.
      </p>

      <h2>15. Contact</h2>
      <p>
        For any questions or requests regarding this Privacy Policy or your
        personal data, please contact us:
      </p>
      <ul>
        <li>
          <strong>Email:</strong> support@voicejournalai.fr
        </li>
        <li>
          <strong>Data Controller:</strong> SAWADOGO Badini Ibrahim
        </li>
        <li>
          <strong>Address:</strong> Cergy, France
        </li>
      </ul>
    </>
  );
}
