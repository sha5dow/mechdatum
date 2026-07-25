---
title: "Extension springs calculation"
sidebar:
  label: "Extension springs calculation"
description: "Technical reference: Extension springs calculation"
keywords: ["extension spring calculation initial tension", "machine-elements"]
category: "machine-elements"
topic: "springs"
subcategory: "extension-springs"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-25"
verified: true
---
Extension springs are mechanical elements designed to absorb and store energy when stretched, exerting a return force proportional to their elongation. Their behavior follows Hooke's law, with the particularity that they incorporate an initial tension that must be overcome before the spring begins to extend. This characteristic makes them ideal for applications such as doors, return systems, load balancing, and clamping mechanisms where a controlled and reliable tensile force is required. The spring stiffness constant, its maximum travel, and the initial tension are the fundamental parameters that determine its selection and sizing in any mechanical design.

The force required to extend an extension spring consists of two terms: the force needed to overcome the initial tension between coils and the additional force proportional to the subsequent elongation. The fundamental relationship between force and deformation is expressed by a modified version of Hooke's law for springs with internal preload.

> **F = Fᵢ + k · x**

where:

| Variable | Description | Unit |
|---|---|---|
| F | Applied force | N / lb |
| Fᵢ | Initial tension (minimum force to start extension) | N / lb |
| k | Spring stiffness constant | N/mm / lb/in |
| x | Elongation from free position | mm / in |

The initial tension, Fᵢ, is an intrinsic property of the spring manufacturing process. During winding, the coils are compressed against each other, generating a preload that must be greater than zero for the spring to function correctly. If there is no initial tension, the spring behaves like a compression spring working in tension, with F directly proportional to x from the origin. The force-extension graph is a straight line with slope k that intersects the force axis at positive Fᵢ, shifting the start of actual extension.

Generalized Hooke's law states that the deformation of an elastic material is proportional to the applied stress, as long as the elastic limits are not exceeded. In extension springs, the wire works predominantly in torsion when the coil is stretched, and the constant k depends on the geometry (wire diameter, mean coil diameter, number of active coils) and the shear modulus of the material.

## Calculation Formulas

The stiffness constant for a helical extension spring is obtained from the torsion theory of curved wires. The most used expression for round wire springs is:

> **k = (G · d⁴) / (8 · D³ · Nₐ)**

where each term is defined in the following table.

| Variable | Description | Unit |
|---|---|---|
| k | Stiffness constant | N/mm / lb/in |
| G | Shear modulus (modulus of rigidity) of material | GPa / psi |
| d | Wire diameter | mm / in |
| D | Mean coil diameter | mm / in |
| Nₐ | Number of active coils | dimensionless |

The shear modulus G depends on the material: for music wire steel, typical values are 80 GPa (11.6 × 10⁶ psi); for AISI 302 stainless steel, approximately 70 GPa (10.2 × 10⁶ psi). The number of active coils in extension springs is the total number of coils minus those intended exclusively for hook formation.

The initial tension Fᵢ can be estimated from the geometry and the elastic limit of the material using the relationship:

> **Fᵢ = (π · τ_ini · d³) / (8 · D)**

where τ_ini is the residual torsion stress induced during winding, which is usually a percentage of the material's shear yield strength (typically 10‑20 %). However, in practice, manufacturers provide the initial tension directly as part of the spring specification.

Alternatively, if the force F₁ for an extension x₁ and the force F₂ for an extension x₂ are known, the constant k can be calculated as:

> **k = (F₂ – F₁) / (x₂ – x₁)**

and the initial tension is solved:

> **Fᵢ = F₁ – k · x₁**

This is useful for experimentally verifying the parameters of an already manufactured spring.

## Materials

Extension springs are predominantly manufactured from high-strength wires, capable of withstanding cyclic loads and maintaining initial tension throughout their service life. The selection of material depends on environmental conditions, fatigue requirements, and operating temperature.

| Material | Reference standard | Shear modulus G (GPa / psi) | Max. working temperature (°C / °F) | Corrosion resistance |
|---|---|---|---|---|
| Music wire | ASTM A228 | 80 / 11.6 × 10⁶ | 120 / 248 | Low |
| Stainless steel AISI 302/304 | ASTM A313 | 70 / 10.2 × 10⁶ | 290 / 554 | High |
| Chromium-silicon steel (CrSi) | ASTM A401 | 79 / 11.5 × 10⁶ | 250 / 482 | Medium |
| Copper-beryllium alloy (CuBe) | ASTM B197 | 40–50 / 5.8–7.3 × 10⁶ | 200 / 392 | Excellent |
| Inconel X-750 (nickel alloy) | AMS 5699 | 77 / 11.2 × 10⁶ | 400 / 752 | Excellent |

For most industrial applications at room temperature and dry environments, music wire is the most economical option with the best fatigue properties. For outdoor, humid, or sanitary environments, stainless steel is preferred. Copper-beryllium alloys and nickel superalloys are reserved for extreme corrosion or high temperature conditions.

## Standard Dimensions

Extension springs are identified by a set of dimensions that define their geometry and mechanical performance. Although standards such as DIN 2097 (helical tension springs) exist, parameter specification predominates in the commercial sphere. The fundamental dimensions found in manufacturer catalogs are summarized in the following table.

| Parameter | Symbol | Typical unit | Common range (reference values) |
|---|---|---|---|
| Outer coil diameter | De | mm / in | 3–150 / 0.12–5.91 |
| Wire diameter | d | mm / in | 0.2–15 / 0.008–0.591 |
| Free length (between hook centers) | L₀ | mm / in | 15–500 / 0.59–19.69 |
| Maximum extension length | Lₘₐₓ | mm / in | L₀ + 80% of L₀ (approximate) |
| Minimum inside hook diameter | Dᵢ | mm / in | 0.5–20 / 0.02–0.79 |
| Stiffness constant | k | N/mm / lb/in | 0.01–500 / 0.06–2855 |
| Initial tension | Fᵢ | N / lb | 0.1–1000 / 0.02–224.8 |

These ranges are indicative and depend on the manufacturer. Specialized catalogs offer standardized combinations of wire diameter, outer diameter, and free length to facilitate direct selection without the need for custom design. Dimensional tolerances are typically governed by standards such as DIN 2097 or manufacturer internal specifications.

## Load Capacities

The load capacity of an extension spring is determined by the torsional strength of the wire and the elastic limit of the material. The fundamental criterion is that the working stress in the wire does not exceed a percentage of the shear yield strength (typically 40‑50 % for static service and 30‑35 % for cyclic service). The maximum allowable force Fₘₐₓ is calculated with the formula:

> **Fₘₐₓ = (π · τₐ · d³) / (8 · D · kₛ)**

where τₐ is the allowable torsion stress and kₛ is the curvature correction factor (Wahl factor).

| Material | Wire diameter d (mm / in) | Mean diameter D (mm / in) | Maximum recommended load (N / lb) | Maximum recommended extension (mm / in) |
|---|---|---|---|---|
| Music (ASTM A228) | 1.0 / 0.039 | 8 / 0.315 | 25 / 5.62 | 50 / 1.97 |
| Music (ASTM A228) | 2.0 / 0.079 | 16 / 0.630 | 120 / 26.98 | 100 / 3.94 |
| Stainless 302 | 1.5 / 0.059 | 12 / 0.472 | 45 / 10.12 | 60 / 2.36 |
| CrSi (ASTM A401) | 3.0 / 0.118 | 24 / 0.945 | 500 / 112.4 | 150 / 5.91 |

These values are representative for a typical configuration of 10 active coils and with a static safety factor of approximately 2. For applications with thousands of cycles, the load must be significantly reduced. Always consult the material's fatigue curve and strain hardening diagrams.

## Selection Criteria

To select the appropriate extension spring, the assembly and operating conditions must be defined beforehand. Below are the usual steps and determining factors.

1. **Load and required extension:** determine the force F₁ needed for the first extension x₁ (minimum working point) and the force F₂ for the maximum extension x₂ (maximum working point). With these values, calculate the constant k = (F₂−F₁)/(x₂−x₁) and the initial tension Fᵢ = F₁ − k·x₁.
2. **Available space:** the outer diameter De and free length L₀ must fit the mechanical housing. Check that the length at maximum extension Lₘₐₓ = L₀ + x₂ does not cause interference.
3. **Hook type:** commercial extension springs offer side hooks, center hooks, bent hooks, threaded hooks, or eyes. The choice depends on the attachment method and the space for anchoring.
4. **Working environment:** if there is moisture, chemicals, or elevated temperatures, select the appropriate material (stainless steel, nickel alloys, etc.).
5. **Life cycles:** for dynamic service (more than 10³ cycles), the working torsion stress must be limited to a safe fatigue value. For static or low-cycle applications, a value closer to the yield strength is acceptable.
6. **Tolerance and reliability:** music wire springs offer low scatter in k and Fᵢ; more exotic materials may require calibration batches.

Once these parameters are defined, manufacturer selection tables that cross-reference wire diameter, mean diameter, constant, and initial tension can be consulted to choose a standard reference or request a custom design.

## Mounting Considerations

The mounting of an extension spring must ensure that the load is applied axially through the anchor points, avoiding bending moments that reduce service life. The hooks are the most critical areas, as they concentrate stresses and are common failure points. Main recommendations:

- Use pins or shafts that allow free rotation of the hooks during extension.
- Avoid the spring working in accidental compression; many extension springs are not designed for this.
- Install mechanical stops that limit the maximum travel and prevent over-extension.
- Ensure the spring is laterally guided if there is risk of buckling or friction with nearby surfaces.
- In applications with vibrations, provide damping elements or secondary fastenings to reduce hammering.

Selection tables often include recommendations for pin diameter based on the hook inside diameter; a typical clearance of 0.1–0.5 mm (0.004–0.020 in) is sufficient to allow movement without sacrificing centering.

## Selection Tables by Application

As a guide, typical configurations of extension springs for some common applications are presented. These values are extracts from commercial catalogs and assume standard working conditions.

| Application | Material | d (mm / in) | De (mm / in) | L₀ (mm / in) | k (N/mm / lb/in) | Fᵢ (N / lb) | Max. load (N / lb) |
|---|---|---|---|---|---|---|---|
| Residential garage doors | Stainless steel 302 | 2.5 / 0.098 | 20 / 0.787 | 200 / 7.87 | 1.8 / 10.3 | 60 / 13.5 | 250 / 56.2 |
| Pedal return mechanisms | Music (ASTM A228) | 1.2 / 0.047 | 9 / 0.354 | 60 / 2.36 | 2.5 / 14.3 | 20 / 4.5 | 90 / 20.2 |
| Aircraft hatch latches | Copper-beryllium (CuBe) | 1.0 / 0.039 | 7 / 0.276 | 50 / 1.97 | 1.2 / 6.9 | 10 / 2.25 | 45 / 10.1 |
| Cable tensioner for power lines | CrSi (ASTM A401) | 5.0 / 0.197 | 40 / 1.575 | 300 / 11.81 | 4.0 / 22.8 | 200 / 44.9 | 800 / 179.8 |
| Quick disconnect of hydraulic couplings | Inconel X-750 | 0.8 / 0.031 | 6 / 0.236 | 40 / 1.57 | 0.9 / 5.1 | 8 / 1.8 | 35 / 7.9 |

These selections are starting points; each design must be validated with the corresponding stress and fatigue verification.

## Frequently Asked Questions (FAQ)

### What is initial tension in an extension spring and why is it important?

Initial tension is the internal force that holds the spring coils together before external load is applied. It is important because it defines the point at which the spring begins to extend and contributes to the total force throughout the travel, directly influencing the mechanism design.

### How is the constant of an extension spring calculated?

The constant k is calculated as k = (F₂ – F₁) / (x₂ – x₁) for two known force-extension points, or using the geometric formula k = (G · d⁴) / (8 · D³ · Nₐ). Manufacturers usually provide the value of k in their data sheets.

### What is the difference between a compression spring and an extension spring?

A compression spring compresses, reducing its length, and pushes outward; an extension spring stretches and pulls inward. Extension springs require hooks or attachment elements and have initial tension; compression springs generally do not.

### What materials are used in extension springs?

The most common are music wire steel (ASTM A228), AISI 302/304 stainless steel, chromium-silicon steel (ASTM A401), and copper-beryllium or nickel alloys for corrosive or high temperature conditions.

### How to select an extension spring for a garage door?

The force required to lift the door in the closed and open positions must be measured, as well as the travel of the cable or lifting arm, and choose a spring with a constant and initial tension that balance the door weight throughout the travel, preferably stainless steel if installed outdoors.

### What is the expected service life of an extension spring?

It depends on the material, working stress, and number of cycles. For music wire working below 30% of the torsional yield strength, more than 100,000 cycles can be expected. With loads near the yield strength, life is reduced to a few thousand cycles.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hookes-law-force-spring-constant-d_1853.html
- **mcmaster.com**: https://www.mcmaster.com/products/extension-springs/
