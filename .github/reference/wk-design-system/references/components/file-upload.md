# File Upload

Allows users to select and upload files from their device.

## When to Use

- Document submission forms
- Image/media uploads
- Import functionality
- Attachment features

## Guidelines

### Do

1. **Show accepted file types**: Clearly indicate what formats are allowed
2. **Display file size limits**: Show maximum file size before selection
3. **Provide progress feedback**: Show upload progress for large files
4. **Allow file removal**: Let users remove selected files before upload

### Don't

1. **Don't auto-upload without confirmation**: Give users control
2. **Don't hide errors**: Show clear validation messages

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `FileUpload` | Basic file input |
| `FileUploadDragAndDrop` | Drag-and-drop upload area |
| `FileUploadItem` | Individual file in upload list |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `["FileUpload", "FileUploadDragAndDrop"]`
- `get-jumpstart-components-examples` with `["FileUpload"]`
