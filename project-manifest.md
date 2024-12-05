# Project Manifest
Version: 1.0.0
Last Updated: 2024-12-05

## Core System Files
```
/system/
  ├── ACEHOLOFS-V3.txt           # Core ACE and HOLOFS integration rules
  ├── ContextKarate.txt          # Fiction framework constraints
  └── story-management-interface.tsx  # System monitoring interface
```

## HOLOFS Virtual Directory Structure
```
/stories/                        # Root for story development
  ├── threads/                   # Active story development paths
  ├── characters/               # Character relationship maps
  ├── institutions/             # Fictional organizational frameworks
  ├── patterns/                 # Story pattern analysis
  ├── templates/                # Reusable story elements
  └── metadata/                 # System tracking and analysis

/input/                         # User input file organization
  ├── docs/                     # Text documents (.txt, .md, etc.)
  ├── flowcharts/              # Diagram files (.mermaid, .dot)
  ├── data/                    # Structured data (.json, .yaml, etc.)
  ├── manuscripts/             # Story manuscripts
  ├── research/                # Background material
  └── references/              # External reference materials
```

## File Organization Rules

### Core System Rules
1. Core system files are immutable during runtime
2. System files maintain fixed paths for consistent reference
3. Virtual paths are mapped to flat storage transparently
4. Core configuration files must be validated on load

### Input File Rules
1. Automatic file categorization based on extension:
   - `.txt`, `.md`, `.doc(x)` → `/input/docs/`
   - `.mermaid`, `.dot` → `/input/flowcharts/`
   - `.json`, `.yaml`, `.xml` → `/input/data/`
   - `.story`, `.chapter` → `/input/manuscripts/`
   - `.ref`, `.bibliography` → `/input/references/`
   - `.research`, `.notes` → `/input/research/`

2. New file types trigger automatic subdirectory creation
3. Files maintain original names with added metadata
4. Input directories are created dynamically as needed

## Integration Parameters

### ACE Methodology Integration
1. All content processing follows ACE stages:
   - Priming
   - Comprehension Tracking
   - Context Clarification
   - Expanding Elicitation
   - Recursive Ascension

2. Each stage maintains:
   - Progress tracking
   - Pattern analysis
   - Consistency verification
   - Framework compliance

### Context Karate Rules
1. All content must use fictional frameworks
2. Real-world references require abstraction
3. Pattern analysis maintains plausible deniability
4. Story threads remain isolated from actual operations
5. Character/institutional relationships use fictional overlays

## System Requirements
1. File system operations must be atomic
2. Virtual paths must resolve consistently
3. Pattern analysis must respect framework boundaries
4. Story threads must maintain isolation
5. Input processing must preserve original content

## Manifest Maintenance
- Regenerate manifest when core files change
- Update version number with structural changes
- Maintain changelog for significant updates
- Document new input categories as created

## Usage Notes
1. Use `regenerate-manifest` command to update
2. Check manifest version before operations
3. Validate core file integrity on startup
4. Monitor input directory structure compliance
5. Maintain consistent naming conventions

