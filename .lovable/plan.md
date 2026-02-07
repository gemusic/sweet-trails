
# Sweet Trails - Typographie Luxueuse & Hero Sections Aérées

## Analyse des Inspirations

### Éléments Communs Identifiés
1. **Texte positionné sur les côtés** (gauche ou droite), jamais au centre bloquant le fond
2. **Arrière-plan comme personnage principal** - l'image/vidéo porte le caractère du site
3. **Typographie mixte** - serif élégant + script/manuscrit italien
4. **Espace négatif généreux** - les éléments "respirent"
5. **Composition asymétrique** - pas de symétrie rigide

---

## Phase 1: Nouvelle Combinaison Typographique Premium

### Polices Sélectionnées

| Usage | Police | Style |
|-------|--------|-------|
| Titres principaux | **Cormorant Garamond** | Serif élégant, luxueux, raffiné |
| Accents manuscrits | **Italianno** | Script italien, manuscrit fluide |
| Sous-titres | **Montserrat** | Sans-serif moderne (existant) |
| Corps de texte | **Lora** | Serif lisible, élégant |

### Pourquoi ce mariage ?
- **Cormorant Garamond**: Inspiré des caractères italiens du XVIe siècle, ultra-élégant, parfait pour "premium food"
- **Italianno**: Calligraphie italienne authentique, ajoute une touche manuscrite et personnelle
- Ensemble: Crée un contraste luxueux entre le structuré et l'organique

### Implémentation CSS
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Italianno&family=Lora:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap');

font-display: 'Cormorant Garamond', serif;  /* H1, H2 */
font-script: 'Italianno', cursive;           /* Accents */
font-body: 'Lora', serif;                    /* Paragraphes */
font-heading: 'Montserrat', sans-serif;      /* Boutons, nav */
```

---

## Phase 2: Hero Section - Layout Ouvert et Aéré

### Concept de Design
Au lieu d'un bloc central qui masque le fond, le contenu sera positionné sur le **côté gauche** avec le reste de l'écran laissé ouvert pour que la vidéo/image de fond s'exprime.

### Nouveau Layout Hero

```text
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ┌──────────────┐                                       │
│  │  Premium     │                                       │
│  │  Catering    │           [VIDÉO EN FOND]             │
│  │              │           VISIBLE ICI                 │
│  │  The Taste   │                                       │
│  │  That Leaves │                                       │
│  │  You         │                                       │
│  │  Wanting     │                                       │
│  │  More        │                                       │
│  │              │                                       │
│  │  [CTA]       │                                       │
│  └──────────────┘                                       │
│                                                         │
│                                    [Scroll ↓]           │
└─────────────────────────────────────────────────────────┘
```

### Caractéristiques
- Contenu aligné à gauche (40-50% de la largeur max)
- Pas de container glassmorphism centré
- Overlay très léger (20-30% au lieu de 70-85%)
- Texte avec text-shadow fort pour lisibilité
- Arrière-plan vidéo visible et impactant
- Typographie mixte: titre en Cormorant + "Wanting More" en Italianno

### Code Structure
```tsx
<section className="relative h-screen">
  <video className="absolute inset-0 object-cover" />
  
  {/* Overlay LÉGER - juste pour la lisibilité */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
  
  {/* Contenu aligné à GAUCHE */}
  <div className="relative z-10 h-full flex items-center">
    <div className="pl-8 md:pl-16 lg:pl-24 max-w-xl lg:max-w-2xl">
      
      {/* Badge discret */}
      <span className="font-heading text-xs tracking-widest text-honey">
        PREMIUM CATERING
      </span>
      
      {/* Titre en Cormorant */}
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white text-shadow-hero">
        The Taste That Leaves You
      </h1>
      
      {/* Accent en Italianno (script) */}
      <span className="font-script text-6xl md:text-8xl lg:text-9xl text-honey">
        Wanting More
      </span>
      
      {/* Sous-titre */}
      <p className="font-body text-lg text-white/80 mt-6 max-w-md">
        Premium Small Chops & Curated Gift Packages in Benin City
      </p>
      
      {/* CTAs */}
      <div className="flex gap-4 mt-8">
        <Button>ORDER NOW</Button>
        <Button variant="ghost">View Menu</Button>
      </div>
    </div>
  </div>
</section>
```

---

## Phase 3: Autres Sections - Layouts Asymétriques

### Best-Sellers Section
Au lieu d'une grille centrée, utiliser un layout décalé:

```text
┌───────────────────────────────────────────────────────┐
│                                                       │
│        Our                                            │
│        Best-Sellers     ┌─────┐ ┌─────┐              │
│                         │ 1   │ │ 2   │              │
│                         └─────┘ └─────┘              │
│                              ┌─────┐                 │
│                              │ 3   │                 │
│                              └─────┘                 │
│                                                       │
└───────────────────────────────────────────────────────┘
```

### Gift Packages Section
Disposition alternée gauche/droite:

```text
┌───────────────────────────────────────────────────────┐
│                                                       │
│  ┌──────────┐                                         │
│  │  Image   │  Diamond Package                        │
│  │          │  La collection ultime...                │
│  └──────────┘  ₦100,000                              │
│                                                       │
│                         ┌──────────┐                  │
│      Bronze Package     │  Image   │                  │
│      Pour les petites   │          │                  │
│      ₦18,000            └──────────┘                  │
│                                                       │
└───────────────────────────────────────────────────────┘
```

---

## Phase 4: Éléments Typographiques Signature

### Utilisation de Italianno (Script)
- Headlines accentuées: "Wanting More", "Indulge", "Sweet Journey"
- Signatures de section
- Prix des packages premium
- Citations de clients

### Utilisation de Cormorant Garamond
- Tous les H1 et H2
- Noms de produits
- Titres de pages

### Hiérarchie Visuelle
```css
/* Tailles fluides */
H1: clamp(48px, 10vw, 128px)  /* Hero */
H2: clamp(36px, 6vw, 80px)    /* Sections */
H3: clamp(24px, 3vw, 40px)    /* Cards */
Script: clamp(40px, 8vw, 120px) /* Accents Italianno */
```

---

## Phase 5: Overlay & Lisibilité

### Stratégie d'Overlay
Au lieu d'un overlay uniforme qui "étouffe" le fond:

```css
/* Gradient directionnel - laisse le côté droit ouvert */
.hero-overlay {
  background: linear-gradient(
    to right,
    hsla(0, 0%, 0%, 0.7) 0%,
    hsla(0, 0%, 0%, 0.4) 40%,
    hsla(0, 0%, 0%, 0.1) 70%,
    transparent 100%
  );
}
```

### Text Shadows Renforcés
```css
.text-shadow-strong {
  text-shadow: 
    0 2px 4px hsla(0, 0%, 0%, 0.9),
    0 4px 8px hsla(0, 0%, 0%, 0.7),
    0 8px 16px hsla(0, 0%, 0%, 0.5),
    0 0 60px hsla(0, 0%, 0%, 0.8);
}
```

---

## Phase 6: Mobile Responsive

### Mobile Layout Hero
Sur mobile, le contenu reste aligné à gauche mais avec plus de padding:

```text
┌─────────────────┐
│                 │
│  Premium        │
│  Catering       │
│                 │
│  The Taste      │
│  That Leaves    │
│  You            │
│  Wanting More   │
│                 │
│  [ORDER NOW]    │
│  [View Menu]    │
│                 │
│      ↓          │
└─────────────────┘
```

### Adaptations
- Padding latéral réduit: `px-6` au lieu de `px-16`
- Tailles de texte réduites mais toujours impactantes
- Stack vertical des boutons CTA
- Script Italianno légèrement plus petit mais toujours visible

---

## Fichiers à Modifier

### Modifications
1. **src/index.css** - Nouvelles polices (Cormorant, Italianno, Lora) + nouvelles classes utilitaires
2. **tailwind.config.ts** - Ajout font-script, mise à jour font-display et font-body
3. **src/components/home/HeroSection.tsx** - Refonte complète avec layout asymétrique ouvert
4. **src/components/home/BestSellersSection.tsx** - Layout décalé, typographie mise à jour
5. **src/components/home/GiftPackagesSection.tsx** - Disposition alternée gauche/droite
6. **src/components/home/SocialProofSection.tsx** - Citations en Italianno
7. **src/components/home/FinalCTASection.tsx** - Titre mixte Cormorant + Italianno

---

## Résultat Attendu

Un site où:
- **L'arrière-plan PORTE le caractère** - visible, impactant, pas caché
- **La typographie est unique** - mariage luxueux Cormorant + script italien Italianno
- **Les layouts sont aérés** - asymétriques, avec beaucoup d'espace négatif
- **Le contenu respire** - positionné sur les côtés, pas au centre bloquant
- **L'expérience est premium** - impossible à confondre avec un template générique
