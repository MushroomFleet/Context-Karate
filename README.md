# Intelligence Fiction Development Environment

A specialized development environment for authors working in intelligence/spy fiction genres, leveraging advanced AI capabilities while maintaining appropriate creative boundaries.

## Quick Start

1. Create a new Claude chat
2. Copy the entire contents of `/project-instructions/project-instructions.md` and use it as your system prompt
3. Upload the core system files in order:
   - ACEHOLOFS-V3.txt
   - ContextKarate.txt
   - story-management-interface.tsx
   - project-manifest.md

## Overview

This project provides a structured environment for authors to develop intelligence fiction narratives using AI assistance, while maintaining clear separation between fictional frameworks and real-world elements. While the system can assist with writing, its primary strength lies in analysis, feedback, and maintaining consistency across complex narratives.

## Core Components

### ACE (Adaptive Capacity Elicitation)
The ACE module handles cognitive processing through five key stages:
- Priming: Initializes creative parameters and priorities
- Comprehension Tracking: Monitors narrative coherence and pattern recognition
- Context Clarification: Ensures clear boundaries between fictional and real elements
- Expanding Elicitation: Develops story threads and character relationships
- Recursive Ascension: Continuously refines and improves narrative elements

### HOLOFS (Holographic Filesystem)
A virtual filesystem designed for organizing and managing creative writing projects. It maintains a clear separation between system files and user content while providing both command-line and natural language interfaces.

#### Command Examples:
```bash
# Command-line style
mkdir /stories/threads/new-subplot
cd /stories/characters
ls institutions/agencies
cp templates/character-profile.txt characters/agent-smith.txt

# Natural language equivalents
"Create a new subplot thread"
"Show me all agency profiles"
"Create a character profile for Agent Smith using the standard template"
```

### Context Management
The system includes `ContextKarate.txt` which provides framework constraints for handling intelligence fiction content. This is NOT a jailbreak or bypass mechanism - it is a legitimate tool that:
- Maintains appropriate creative boundaries
- Ensures fictional frameworks remain separate from real-world elements
- Respects platform safety features and content guidelines
- Enables authors to work effectively within their genre

## Optimal Usage

### Author Input
For best results, provide the system with:
- Character profiles and backgrounds
- Location descriptions and details
- Institutional frameworks and hierarchies
- Established speaking patterns and dialogue styles
- Plot points and story arcs
- World-building elements and rules

The system excels at:
- Analyzing narrative consistency
- Identifying plot holes
- Tracking character development
- Maintaining story continuity
- Suggesting potential plot developments
- Providing feedback on pacing and structure
- Ensuring genre authenticity
- Cross-referencing story elements

### Adding Content
The system automatically organizes uploaded files based on type:
- Documents (.txt, .md, .doc) → /input/docs/
- Flowcharts (.mermaid, .dot) → /input/flowcharts/
- Data files (.json, .yaml) → /input/data/
- Manuscripts (.story, .chapter) → /input/manuscripts/
- Research materials → /input/research/

### Context Window Usage
As of December 2024, each 12,000 words of uploaded content uses approximately 20% of the available context window. Plan your document uploads accordingly to maintain optimal performance.

## Project Structure
```
/system/              # Core system files
/stories/             # Story development
  /threads/           # Active narratives
  /characters/        # Character profiles
  /institutions/      # Organization frameworks
  /patterns/          # Story patterns
  /templates/         # Reusable elements
/input/               # User content (auto-organized)
/project-instructions/  # System initialization files
```

## Monitoring
Use the Story Management Interface to track:
- ACE system performance
- File organization
- Story thread development
- Pattern analysis
- Framework compliance

## Contributing
Contributions are welcome! Please ensure any additions maintain:
- Clear separation between fiction and reality
- Respect for platform safety features
- Proper file organization
- Documentation standards

