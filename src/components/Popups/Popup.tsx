import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface PopupProps {
  title: string;
  open: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const Popup = ({ title, open, closeModal, children }: PopupProps) => (
  <Transition appear show={open} as={Fragment}>
    <Dialog
      as="div"
      className="fixed inset-0 z-10 select-none overflow-y-auto"
      onClose={closeModal}
    >
      <div className="min-h-screen px-4 text-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-neutral-600/40 backdrop-blur-md" />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-bg-card-light p-6 text-left align-middle shadow-xl transition-all dark:bg-bg-card-dark">
            <div className="flex items-center justify-between">
              <Dialog.Title
                as="h3"
                className="text-light dark:text-dark text-lg font-medium leading-6"
              >
                {title}
              </Dialog.Title>
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-2 py-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={closeModal}
              >
                X
              </button>
            </div>
            {children}
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
);

export default Popup;
