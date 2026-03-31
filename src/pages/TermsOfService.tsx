import { useTranslation } from 'react-i18next'

export function TermsOfService() {
  const { i18n } = useTranslation()
  const fr = i18n.language?.startsWith('fr')

  return fr ? <TermsOfServiceFR /> : <TermsOfServiceEN />
}

function TermsOfServiceFR() {
  return (
    <>
      <h1>Conditions Generales d'Utilisation</h1>
      <p className="text-text-muted/70 text-sm !mb-8">Derniere mise a jour : 31 mars 2026</p>

      <h2>1. Objet et acceptation</h2>
      <p>
        Les presentes Conditions Generales d'Utilisation (ci-apres &laquo; CGU &raquo;) regissent l'acces et
        l'utilisation de l'application mobile VoiceJournal AI (ci-apres &laquo; l'Application &raquo;) et du
        site internet associe (ci-apres &laquo; le Site &raquo;), edites par <strong>SAWADOGO Badini Ibrahim</strong>,
        personne physique domiciliee a <strong>Cergy</strong>, France (ci-apres &laquo; l'Editeur &raquo;).
      </p>
      <p>
        En creant un compte ou en utilisant l'Application, vous acceptez sans reserve les presentes CGU.
        Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser l'Application.
      </p>
      <p>
        L'Editeur se reserve le droit de modifier les presentes CGU a tout moment. Les modifications
        prennent effet des leur publication sur le Site ou notification dans l'Application. La poursuite
        de l'utilisation de l'Application apres notification des modifications vaut acceptation des CGU
        modifiees.
      </p>

      <h2>2. Definitions</h2>
      <ul>
        <li><strong>&laquo; Application &raquo; :</strong> L'application mobile VoiceJournal AI disponible sur l'App Store (iOS) et Google Play (Android).</li>
        <li><strong>&laquo; Utilisateur &raquo; :</strong> Toute personne physique qui cree un compte et utilise l'Application.</li>
        <li><strong>&laquo; Service &raquo; :</strong> L'ensemble des fonctionnalites proposees par l'Application, y compris l'enregistrement vocal, la transcription, l'analyse emotionnelle par IA, le suivi d'humeur et les insights.</li>
        <li><strong>&laquo; Contenu Utilisateur &raquo; :</strong> Tout enregistrement vocal, transcription et donnee generes par l'Utilisateur dans le cadre de l'utilisation de l'Application.</li>
        <li><strong>&laquo; Abonnement Pro &raquo; :</strong> L'offre d'abonnement payante donnant acces aux fonctionnalites premium de l'Application.</li>
        <li><strong>&laquo; IA &raquo; :</strong> Le systeme d'intelligence artificielle (Google Gemini) utilise pour transcrire et analyser le contenu vocal.</li>
      </ul>

      <h2>3. Description du Service</h2>
      <p>VoiceJournal AI est une application de journal vocal propulsee par l'intelligence artificielle, permettant aux Utilisateurs de :</p>
      <ul>
        <li>Enregistrer des entrees vocales (10 secondes a 10 minutes par session)</li>
        <li>Obtenir une transcription automatique de leurs enregistrements</li>
        <li>Recevoir une analyse emotionnelle par IA (detection de 6 emotions : joie, tristesse, colere, peur, surprise, degout)</li>
        <li>Suivre leur humeur dans le temps avec des graphiques et un calendrier</li>
        <li>Recevoir des insights et suggestions personnalises</li>
        <li>Acceder a des questions du jour pour la reflexion guidee</li>
        <li>Debloquer des badges et maintenir des series de journaling</li>
      </ul>
      <p>
        Le Service est fourni &laquo; en l'etat &raquo; et &laquo; selon disponibilite &raquo;. L'Editeur
        ne garantit pas que le Service sera disponible de maniere ininterrompue, securisee ou exempte
        d'erreurs.
      </p>

      <h2>4. Inscription et compte</h2>
      <h3>4.1. Creation de compte</h3>
      <p>
        L'utilisation de l'Application necessite la creation d'un compte. L'Utilisateur s'engage a fournir
        des informations exactes et a jour lors de son inscription, et a les maintenir a jour.
      </p>
      <h3>4.2. Securite du compte</h3>
      <p>
        L'Utilisateur est seul responsable de la confidentialite de ses identifiants de connexion et de
        toutes les activites effectuees sous son compte. En cas d'utilisation non autorisee de votre compte,
        vous devez nous en informer immediatement a support@voicejournalai.com.
      </p>
      <h3>4.3. Conditions d'age</h3>
      <p>
        L'Application est destinee aux personnes agees de 16 ans et plus. En creant un compte, vous
        certifiez avoir au moins 16 ans. Si vous etes age de 16 a 18 ans, vous declarrez disposer de
        l'autorisation de votre representant legal.
      </p>

      <h2>5. Abonnements et paiements</h2>
      <h3>5.1. Offres disponibles</h3>
      <p>L'Application propose les offres suivantes :</p>
      <ul>
        <li><strong>Offre Gratuite :</strong> 3 entrees par semaine, analyse emotionnelle basique, questions du jour, badges et series, calendrier d'humeur.</li>
        <li><strong>Abonnement Pro :</strong> 4,99 EUR/mois ou 29,99 EUR/an. Entrees illimitees, analyse IA avancee, insights hebdomadaires, chat avec vos entrees, dashboard complet et export, support prioritaire.</li>
      </ul>
      <h3>5.2. Essai gratuit</h3>
      <p>
        L'Abonnement Pro inclut un essai gratuit de 7 jours. A l'issue de la periode d'essai, l'abonnement
        est automatiquement converti en abonnement payant, sauf si l'Utilisateur l'annule avant la fin de
        la periode d'essai.
      </p>
      <h3>5.3. Facturation et paiement</h3>
      <p>
        Les paiements sont geres exclusivement par l'App Store (Apple) ou Google Play (Google), selon
        la plateforme utilisee. Les conditions de paiement, de renouvellement et de facturation sont
        regies par les conditions generales de la plateforme concernee.
      </p>
      <h3>5.4. Annulation</h3>
      <p>
        L'Utilisateur peut annuler son Abonnement Pro a tout moment via les parametres de son App Store
        ou Google Play. L'annulation prend effet a la fin de la periode de facturation en cours.
        L'Utilisateur conserve l'acces aux fonctionnalites Pro jusqu'a cette date.
      </p>
      <h3>5.5. Droit de retractation</h3>
      <p>
        Conformement a l'article L221-28 du Code de la consommation, le droit de retractation ne peut etre
        exerce pour les contrats de fourniture de contenu numerique fourni sur un support immateriel dont
        l'execution a commence avec l'accord du consommateur. Toutefois, pendant la periode d'essai gratuit,
        l'Utilisateur peut annuler sans frais.
      </p>
      <p>
        Les demandes de remboursement relatives aux achats in-app doivent etre adressees directement a Apple
        ou Google, selon la plateforme d'achat.
      </p>

      <h2>6. Propriete intellectuelle</h2>
      <h3>6.1. Droits de l'Editeur</h3>
      <p>
        L'Application, y compris son code source, son design, ses logos, ses textes, ses graphiques et
        l'ensemble de ses contenus (a l'exception du Contenu Utilisateur), est la propriete exclusive de
        l'Editeur et est protegee par le droit de la propriete intellectuelle francais et international.
      </p>
      <p>
        L'Utilisateur se voit accorder une licence limitee, non exclusive, non transferable et revocable
        pour utiliser l'Application conformement aux presentes CGU. Cette licence ne confere aucun droit
        de propriete sur l'Application.
      </p>
      <h3>6.2. Contenu Utilisateur</h3>
      <p>
        L'Utilisateur conserve l'integralite de ses droits de propriete intellectuelle sur son Contenu
        Utilisateur (enregistrements vocaux, transcriptions). En utilisant l'Application, l'Utilisateur
        accorde a l'Editeur une licence limitee, non exclusive et mondiale pour heberger, stocker, traiter
        et analyser ce contenu dans le seul but de fournir le Service.
      </p>
      <p>
        Cette licence prend fin lors de la suppression du Contenu Utilisateur ou de la fermeture du compte.
      </p>

      <h2>7. Utilisation acceptable</h2>
      <p>L'Utilisateur s'engage a ne pas :</p>
      <ul>
        <li>Utiliser l'Application a des fins illegales ou contraires aux presentes CGU</li>
        <li>Tenter d'acceder de maniere non autorisee aux systemes ou aux donnees d'autres utilisateurs</li>
        <li>Copier, modifier, distribuer ou faire de l'ingenierie inverse de l'Application</li>
        <li>Utiliser l'Application pour enregistrer du contenu portant atteinte aux droits de tiers</li>
        <li>Introduire des virus, logiciels malveillants ou tout code destructeur</li>
        <li>Surcharger ou perturber l'infrastructure de l'Application</li>
        <li>Creer plusieurs comptes a des fins frauduleuses</li>
        <li>Revendre ou transferer l'acces a son compte</li>
      </ul>
      <p>
        Tout manquement a ces regles peut entrainer la suspension ou la resiliation immediate du compte,
        sans preavis ni indemnite.
      </p>

      <h2>8. Intelligence artificielle - Avertissements importants</h2>
      <h3>8.1. Nature des analyses IA</h3>
      <p>
        Les analyses emotionnelles, scores d'humeur, insights et suggestions generes par l'IA sont fournis
        <strong> a titre purement informatif</strong>. Ils ne constituent en aucun cas :
      </p>
      <ul>
        <li>Un diagnostic medical ou psychologique</li>
        <li>Un avis therapeutique ou un traitement</li>
        <li>Un conseil professionnel en matiere de sante mentale</li>
      </ul>
      <h3>8.2. Limitation de fiabilite</h3>
      <p>
        L'IA peut produire des resultats inexacts, incomplets ou inappropries. L'Utilisateur ne doit pas
        se fier exclusivement aux resultats de l'IA pour prendre des decisions concernant sa sante ou
        son bien-etre. L'Editeur ne garantit pas l'exactitude, la fiabilite ou la pertinence des analyses
        generees.
      </p>
      <h3>8.3. Avertissement sante</h3>
      <p>
        <strong>VoiceJournal AI ne remplace pas une consultation avec un professionnel de sante.</strong> Si
        vous eprouvez une detresse emotionnelle ou psychologique, consultez un professionnel de sante
        qualifie. En cas d'urgence, contactez le 15 (SAMU), le 114 (personnes sourdes ou malentendantes)
        ou le 112 (urgences europeennes).
      </p>

      <h2>9. Donnees personnelles et vie privee</h2>
      <p>
        La collecte et le traitement de vos donnees personnelles sont regis par notre{' '}
        <a href="#/privacy-policy">Politique de Confidentialite</a>, qui fait partie integrante des
        presentes CGU. En utilisant l'Application, vous reconnaissez avoir pris connaissance de cette
        politique.
      </p>

      <h2>10. Disponibilite du Service</h2>
      <p>
        L'Editeur s'efforce de maintenir l'Application accessible 24h/24 et 7j/7. Toutefois, l'acces
        peut etre interrompu, notamment pour des raisons de maintenance, de mise a jour, ou en cas de
        force majeure. L'Editeur ne saurait etre tenu responsable des interruptions de service, quelles
        qu'en soient la duree et la frequence.
      </p>

      <h2>11. Exclusion de garanties</h2>
      <p>
        L'Application et le Service sont fournis &laquo; en l'etat &raquo; et &laquo; selon disponibilite &raquo;,
        sans aucune garantie, expresse ou implicite, de quelque nature que ce soit, y compris mais sans s'y
        limiter, les garanties implicites de qualite marchande, d'adequation a un usage particulier ou de
        non-contrefacon.
      </p>
      <p>L'Editeur ne garantit pas que :</p>
      <ul>
        <li>Le Service sera ininterrompu, securise ou exempt d'erreurs</li>
        <li>Les resultats de l'analyse IA seront exacts, complets ou fiables</li>
        <li>Les defauts seront corriges dans un delai determine</li>
        <li>L'Application sera compatible avec tous les appareils</li>
      </ul>

      <h2>12. Limitation de responsabilite</h2>
      <p>
        <strong>Dans les limites autorisees par la loi applicable :</strong>
      </p>
      <ul>
        <li>
          L'Editeur ne pourra etre tenu responsable de tout dommage indirect, accessoire, special,
          consecutif ou punitif, y compris la perte de profits, de donnees, d'usage ou de toute autre
          perte intangible, resultant de votre utilisation ou de votre impossibilite d'utiliser le Service.
        </li>
        <li>
          La responsabilite totale de l'Editeur envers l'Utilisateur pour tout dommage direct est limitee
          au montant total paye par l'Utilisateur au cours des douze (12) mois precedant l'evenement
          generateur de responsabilite, ou a 100 EUR si aucun paiement n'a ete effectue.
        </li>
        <li>
          L'Editeur ne saurait etre tenu responsable des consequences de decisions prises par l'Utilisateur
          sur la base des analyses, insights ou suggestions generes par l'IA.
        </li>
      </ul>
      <p>
        Rien dans les presentes CGU ne limite ou n'exclut la responsabilite de l'Editeur pour les dommages
        causes par sa faute lourde ou intentionnelle, ni pour toute responsabilite qui ne peut etre
        legalement limitee ou exclue en vertu du droit francais.
      </p>

      <h2>13. Indemnisation</h2>
      <p>
        L'Utilisateur s'engage a indemniser et a degager de toute responsabilite l'Editeur contre
        toute reclamation, dommage, perte, cout et depense (y compris les frais de justice raisonnables)
        resultant de :
      </p>
      <ul>
        <li>La violation des presentes CGU par l'Utilisateur</li>
        <li>L'utilisation abusive ou frauduleuse de l'Application</li>
        <li>Le Contenu Utilisateur portant atteinte aux droits de tiers</li>
      </ul>

      <h2>14. Resiliation</h2>
      <h3>14.1. Par l'Utilisateur</h3>
      <p>
        L'Utilisateur peut resilier son compte a tout moment en supprimant son compte depuis les
        parametres de l'Application ou en contactant support@voicejournalai.com. La suppression du
        compte entraine l'effacement de toutes les donnees personnelles dans un delai de 30 jours,
        sous reserve des obligations legales de conservation.
      </p>
      <h3>14.2. Par l'Editeur</h3>
      <p>
        L'Editeur peut suspendre ou resilier le compte d'un Utilisateur, avec ou sans preavis, en cas de :
      </p>
      <ul>
        <li>Violation des presentes CGU</li>
        <li>Utilisation frauduleuse ou abusive du Service</li>
        <li>Non-paiement de l'abonnement</li>
        <li>Inactivite prolongee du compte (superieure a 24 mois)</li>
        <li>Arret du Service</li>
      </ul>
      <h3>14.3. Effets de la resiliation</h3>
      <p>
        En cas de resiliation, l'Utilisateur perd l'acces au Service. Les clauses relatives a la propriete
        intellectuelle, la limitation de responsabilite, l'indemnisation et le droit applicable survivent
        a la resiliation.
      </p>

      <h2>15. Force majeure</h2>
      <p>
        L'Editeur ne pourra etre tenu responsable de tout retard ou manquement dans l'execution de ses
        obligations resultant d'un evenement de force majeure au sens de l'article 1218 du Code civil,
        notamment : catastrophes naturelles, pannes d'electricite ou de telecommunications, pannes de
        serveurs tiers, epidemies, conflits, decisions gouvernementales, cyberattaques, ou tout autre
        evenement echappant au controle raisonnable de l'Editeur.
      </p>

      <h2>16. Droit applicable et juridiction</h2>
      <p>
        Les presentes CGU sont regies par le droit francais. Tout litige relatif a leur interpretation
        ou a leur execution sera soumis aux tribunaux competents du ressort de <strong>Cergy</strong>,
        France, sous reserve des dispositions imperatives en matiere de competence juridictionnelle au
        benefice des consommateurs.
      </p>
      <p>
        Conformement aux articles L611-1 et suivants du Code de la consommation, en cas de litige,
        l'Utilisateur peut recourir gratuitement au service de mediation de la consommation. Le mediateur
        de la consommation competent sera communique sur demande a support@voicejournalai.com.
      </p>
      <p>
        L'Utilisateur peut egalement utiliser la plateforme europeenne de reglement en ligne des litiges :{' '}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr
        </a>
      </p>

      <h2>17. Dispositions generales</h2>
      <h3>17.1. Integralite de l'accord</h3>
      <p>
        Les presentes CGU, la Politique de Confidentialite et la Politique des Cookies constituent
        l'integralite de l'accord entre l'Utilisateur et l'Editeur concernant l'utilisation de l'Application.
      </p>
      <h3>17.2. Divisibilite</h3>
      <p>
        Si une disposition des presentes CGU est jugee invalide ou inapplicable par un tribunal competent,
        cette disposition sera limitee ou eliminee dans la mesure minimale necessaire, les autres dispositions
        restant pleinement en vigueur.
      </p>
      <h3>17.3. Renonciation</h3>
      <p>
        Le fait pour l'Editeur de ne pas exercer un droit prevu par les presentes CGU ne constitue pas
        une renonciation a ce droit.
      </p>
      <h3>17.4. Cession</h3>
      <p>
        L'Utilisateur ne peut ceder ses droits et obligations au titre des presentes CGU sans le
        consentement prealable ecrit de l'Editeur. L'Editeur peut ceder les presentes CGU dans le
        cadre d'une reorganisation, fusion ou cession de son activite.
      </p>

      <h2>18. Contact</h2>
      <p>Pour toute question relative aux presentes CGU, veuillez nous contacter :</p>
      <ul>
        <li><strong>Email :</strong> support@voicejournalai.com</li>
        <li><strong>Editeur :</strong> SAWADOGO Badini Ibrahim</li>
        <li><strong>Adresse :</strong> Cergy, France</li>
      </ul>
    </>
  )
}

function TermsOfServiceEN() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p className="text-text-muted/70 text-sm !mb-8">Last updated: March 31, 2026</p>

      <h2>1. Purpose and Acceptance</h2>
      <p>
        These Terms of Service (hereinafter "Terms") govern your access to and use of the VoiceJournal AI
        mobile application (hereinafter the "Application") and the associated website (hereinafter the
        "Website"), published by <strong>SAWADOGO Badini Ibrahim</strong>, an individual based in{' '}
        <strong>Cergy</strong>, France (hereinafter the "Publisher").
      </p>
      <p>
        By creating an account or using the Application, you accept these Terms without reservation.
        If you do not accept these terms, you must not use the Application.
      </p>
      <p>
        The Publisher reserves the right to modify these Terms at any time. Changes take effect upon
        publication on the Website or notification in the Application. Continued use of the Application
        after notification of changes constitutes acceptance of the modified Terms.
      </p>

      <h2>2. Definitions</h2>
      <ul>
        <li><strong>"Application":</strong> The VoiceJournal AI mobile application available on the App Store (iOS) and Google Play (Android).</li>
        <li><strong>"User":</strong> Any individual who creates an account and uses the Application.</li>
        <li><strong>"Service":</strong> All features offered by the Application, including voice recording, transcription, AI emotional analysis, mood tracking, and insights.</li>
        <li><strong>"User Content":</strong> Any voice recording, transcription, and data generated by the User through the Application.</li>
        <li><strong>"Pro Subscription":</strong> The paid subscription offering access to premium features of the Application.</li>
        <li><strong>"AI":</strong> The artificial intelligence system (Google Gemini) used to transcribe and analyze voice content.</li>
      </ul>

      <h2>3. Description of the Service</h2>
      <p>VoiceJournal AI is an AI-powered voice journal application that enables Users to:</p>
      <ul>
        <li>Record voice entries (10 seconds to 10 minutes per session)</li>
        <li>Obtain automatic transcription of their recordings</li>
        <li>Receive AI emotional analysis (detecting 6 emotions: joy, sadness, anger, fear, surprise, disgust)</li>
        <li>Track their mood over time with graphs and a calendar</li>
        <li>Receive personalized insights and suggestions</li>
        <li>Access daily prompts for guided reflection</li>
        <li>Unlock badges and maintain journaling streaks</li>
      </ul>
      <p>
        The Service is provided "as is" and "as available." The Publisher does not guarantee that the
        Service will be available on an uninterrupted, secure, or error-free basis.
      </p>

      <h2>4. Registration and Account</h2>
      <h3>4.1. Account Creation</h3>
      <p>
        Using the Application requires creating an account. The User agrees to provide accurate and
        up-to-date information during registration and to keep this information current.
      </p>
      <h3>4.2. Account Security</h3>
      <p>
        The User is solely responsible for the confidentiality of their login credentials and all
        activities carried out under their account. In case of unauthorized use of your account, you
        must notify us immediately at support@voicejournalai.com.
      </p>
      <h3>4.3. Age Requirements</h3>
      <p>
        The Application is intended for individuals aged 16 and over. By creating an account, you
        certify that you are at least 16 years old. If you are between 16 and 18, you represent that
        you have obtained authorization from your legal guardian.
      </p>

      <h2>5. Subscriptions and Payments</h2>
      <h3>5.1. Available Plans</h3>
      <p>The Application offers the following plans:</p>
      <ul>
        <li><strong>Free Plan:</strong> 3 entries per week, basic emotion analysis, daily prompts, badges and streaks, mood calendar.</li>
        <li><strong>Pro Subscription:</strong> EUR 4.99/month or EUR 29.99/year. Unlimited entries, advanced AI analysis, weekly insights, chat with your entries, full dashboard and export, priority support.</li>
      </ul>
      <h3>5.2. Free Trial</h3>
      <p>
        The Pro Subscription includes a 7-day free trial. At the end of the trial period, the subscription
        is automatically converted to a paid subscription unless the User cancels before the trial ends.
      </p>
      <h3>5.3. Billing and Payment</h3>
      <p>
        Payments are handled exclusively by the App Store (Apple) or Google Play (Google), depending
        on the platform used. Payment, renewal, and billing terms are governed by the terms of the
        applicable platform.
      </p>
      <h3>5.4. Cancellation</h3>
      <p>
        The User may cancel their Pro Subscription at any time through their App Store or Google Play
        settings. Cancellation takes effect at the end of the current billing period. The User retains
        access to Pro features until that date.
      </p>
      <h3>5.5. Right of Withdrawal</h3>
      <p>
        In accordance with applicable consumer protection laws, the right of withdrawal may not apply
        to digital content contracts where execution has begun with the consumer's agreement. However,
        during the free trial period, the User may cancel at no cost.
      </p>
      <p>
        Refund requests for in-app purchases must be directed to Apple or Google, depending on the
        purchase platform.
      </p>

      <h2>6. Intellectual Property</h2>
      <h3>6.1. Publisher's Rights</h3>
      <p>
        The Application, including its source code, design, logos, text, graphics, and all content
        (excluding User Content), is the exclusive property of the Publisher and is protected by French
        and international intellectual property law.
      </p>
      <p>
        The User is granted a limited, non-exclusive, non-transferable, and revocable license to use
        the Application in accordance with these Terms. This license does not confer any ownership
        rights over the Application.
      </p>
      <h3>6.2. User Content</h3>
      <p>
        The User retains full intellectual property rights over their User Content (voice recordings,
        transcriptions). By using the Application, the User grants the Publisher a limited, non-exclusive,
        worldwide license to host, store, process, and analyze such content solely for the purpose of
        providing the Service.
      </p>
      <p>
        This license terminates upon deletion of the User Content or closure of the account.
      </p>

      <h2>7. Acceptable Use</h2>
      <p>The User agrees not to:</p>
      <ul>
        <li>Use the Application for illegal purposes or in violation of these Terms</li>
        <li>Attempt unauthorized access to systems or other users' data</li>
        <li>Copy, modify, distribute, or reverse-engineer the Application</li>
        <li>Use the Application to record content that infringes on third-party rights</li>
        <li>Introduce viruses, malware, or any destructive code</li>
        <li>Overload or disrupt the Application's infrastructure</li>
        <li>Create multiple accounts for fraudulent purposes</li>
        <li>Resell or transfer access to their account</li>
      </ul>
      <p>
        Any violation of these rules may result in immediate suspension or termination of the account,
        without notice or compensation.
      </p>

      <h2>8. Artificial Intelligence - Important Disclaimers</h2>
      <h3>8.1. Nature of AI Analysis</h3>
      <p>
        Emotional analyses, mood scores, insights, and suggestions generated by AI are provided{' '}
        <strong>for informational purposes only</strong>. They do not constitute:
      </p>
      <ul>
        <li>A medical or psychological diagnosis</li>
        <li>Therapeutic advice or treatment</li>
        <li>Professional mental health counseling</li>
      </ul>
      <h3>8.2. Reliability Limitations</h3>
      <p>
        AI may produce inaccurate, incomplete, or inappropriate results. The User should not rely solely
        on AI results for decisions regarding their health or well-being. The Publisher does not guarantee
        the accuracy, reliability, or relevance of generated analyses.
      </p>
      <h3>8.3. Health Disclaimer</h3>
      <p>
        <strong>VoiceJournal AI does not replace consultation with a healthcare professional.</strong> If
        you experience emotional or psychological distress, consult a qualified healthcare professional.
        In case of emergency, contact your local emergency services (15, 114, or 112 in France).
      </p>

      <h2>9. Personal Data and Privacy</h2>
      <p>
        The collection and processing of your personal data is governed by our{' '}
        <a href="#/privacy-policy">Privacy Policy</a>, which is an integral part of these Terms. By using
        the Application, you acknowledge that you have read this policy.
      </p>

      <h2>10. Service Availability</h2>
      <p>
        The Publisher endeavors to keep the Application accessible 24/7. However, access may be
        interrupted, particularly for maintenance, updates, or in the event of force majeure. The
        Publisher shall not be held liable for service interruptions regardless of their duration
        or frequency.
      </p>

      <h2>11. Disclaimer of Warranties</h2>
      <p>
        The Application and Service are provided "as is" and "as available," without any warranty
        of any kind, whether express or implied, including but not limited to implied warranties of
        merchantability, fitness for a particular purpose, or non-infringement.
      </p>
      <p>The Publisher does not warrant that:</p>
      <ul>
        <li>The Service will be uninterrupted, secure, or error-free</li>
        <li>AI analysis results will be accurate, complete, or reliable</li>
        <li>Defects will be corrected within a specific timeframe</li>
        <li>The Application will be compatible with all devices</li>
      </ul>

      <h2>12. Limitation of Liability</h2>
      <p>
        <strong>To the fullest extent permitted by applicable law:</strong>
      </p>
      <ul>
        <li>
          The Publisher shall not be liable for any indirect, incidental, special, consequential, or
          punitive damages, including loss of profits, data, use, or any other intangible loss, resulting
          from your use of or inability to use the Service.
        </li>
        <li>
          The Publisher's total liability to the User for all direct damages shall be limited to the
          total amount paid by the User in the twelve (12) months preceding the event giving rise to
          liability, or EUR 100 if no payment has been made.
        </li>
        <li>
          The Publisher shall not be held liable for consequences of decisions made by the User based
          on analyses, insights, or suggestions generated by AI.
        </li>
      </ul>
      <p>
        Nothing in these Terms limits or excludes the Publisher's liability for damages caused by
        gross negligence or willful misconduct, or any liability that cannot be legally limited or
        excluded under French law.
      </p>

      <h2>13. Indemnification</h2>
      <p>
        The User agrees to indemnify and hold harmless the Publisher against any claims, damages,
        losses, costs, and expenses (including reasonable legal fees) arising from:
      </p>
      <ul>
        <li>The User's breach of these Terms</li>
        <li>Abusive or fraudulent use of the Application</li>
        <li>User Content that infringes on third-party rights</li>
      </ul>

      <h2>14. Termination</h2>
      <h3>14.1. By the User</h3>
      <p>
        The User may terminate their account at any time by deleting their account through the
        Application settings or by contacting support@voicejournalai.com. Account deletion results in
        erasure of all personal data within 30 days, subject to legal retention obligations.
      </p>
      <h3>14.2. By the Publisher</h3>
      <p>
        The Publisher may suspend or terminate a User's account, with or without notice, in the event of:
      </p>
      <ul>
        <li>Violation of these Terms</li>
        <li>Fraudulent or abusive use of the Service</li>
        <li>Non-payment of subscription</li>
        <li>Extended account inactivity (over 24 months)</li>
        <li>Discontinuation of the Service</li>
      </ul>
      <h3>14.3. Effects of Termination</h3>
      <p>
        Upon termination, the User loses access to the Service. Clauses relating to intellectual
        property, limitation of liability, indemnification, and governing law survive termination.
      </p>

      <h2>15. Force Majeure</h2>
      <p>
        The Publisher shall not be held liable for any delay or failure in the performance of its
        obligations resulting from a force majeure event, including but not limited to: natural
        disasters, power or telecommunications outages, third-party server failures, epidemics,
        conflicts, government actions, cyberattacks, or any other event beyond the Publisher's
        reasonable control.
      </p>

      <h2>16. Governing Law and Jurisdiction</h2>
      <p>
        These Terms are governed by the laws of France. Any dispute relating to their interpretation
        or performance shall be submitted to the competent courts of <strong>Cergy</strong>,
        France, subject to mandatory provisions regarding consumer jurisdiction.
      </p>
      <p>
        In accordance with French consumer law, in the event of a dispute, the User may access free
        consumer mediation services. The competent consumer mediator will be provided upon request at
        support@voicejournalai.com.
      </p>
      <p>
        The User may also use the European Online Dispute Resolution platform:{' '}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr
        </a>
      </p>

      <h2>17. General Provisions</h2>
      <h3>17.1. Entire Agreement</h3>
      <p>
        These Terms, the Privacy Policy, and the Cookie Policy constitute the entire agreement between
        the User and the Publisher regarding use of the Application.
      </p>
      <h3>17.2. Severability</h3>
      <p>
        If any provision of these Terms is found to be invalid or unenforceable by a competent court,
        that provision shall be limited or eliminated to the minimum extent necessary, with the remaining
        provisions continuing in full force and effect.
      </p>
      <h3>17.3. Waiver</h3>
      <p>
        The Publisher's failure to exercise any right under these Terms shall not constitute a waiver
        of that right.
      </p>
      <h3>17.4. Assignment</h3>
      <p>
        The User may not assign their rights and obligations under these Terms without the Publisher's
        prior written consent. The Publisher may assign these Terms in connection with a reorganization,
        merger, or transfer of its business.
      </p>

      <h2>18. Contact</h2>
      <p>For any questions regarding these Terms, please contact us:</p>
      <ul>
        <li><strong>Email:</strong> support@voicejournalai.com</li>
        <li><strong>Publisher:</strong> SAWADOGO Badini Ibrahim</li>
        <li><strong>Address:</strong> Cergy, France</li>
      </ul>
    </>
  )
}
