---
sidebar_position: 1
---

# useConfirm


## custom hooks on using dialog/modal with custom hooks


```tsx
const useConfirm = (props = { title: '', content: '', primaryButtonText: '', secondaryButtonText: '' }) => {
  const { title, content, primaryButtonText, secondaryButtonText } = props;
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const resolveCallback = useRef(null);
  const requestForConfirm = useCallback(() => {
    setIsConfirmDialogOpen(true);
    return new Promise((resolve) => {
      resolveCallback.current = resolve;
    });
  }, []);

  const onConfirm = useCallback(async () => {
    setIsConfirmDialogOpen(false);
    if (resolveCallback.current) {
      resolveCallback.current(true);
    }
  }, []);

  const onCancel = useCallback(async () => {
    setIsConfirmDialogOpen(false);
    if (resolveCallback.current) {
      resolveCallback.current(false);
    }
  }, []);

  const confirmDialog = isConfirmDialogOpen && (
    <Dialog open={isConfirmDialogOpen} onClose={onCancel} maxWidth="md">
      <Dialog.Title>
        {title || 'Dialog Title'}
      </Dialog.Title>
      <Dialog.Content>
        {content || 'Dialog Content'}
      </Dialog.Content>
      <Dialog.Action
        onConfirm={onConfirm}
        onCancel={onCancel}
        confirmText={primaryButtonText || 'ok'}
        cancelText={secondaryButtonText || 'cancel'}
      />
    </Dialog>
  );

  return [confirmDialog, requestForConfirm];
};

export default useConfirm;
```