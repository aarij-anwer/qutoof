'use client';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  instructorName: string;
  paypalButtonId: string;
}

export default function SubscribeModal({
  isOpen,
  onClose,
  instructorName,
  paypalButtonId,
}: SubscribeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-xl dark:bg-gray-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <span className="text-2xl">&times;</span>
        </button>

        <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
          Subscribe with {instructorName}
        </h2>
        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          Choose your subscription plan to get started
        </p>

        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value={paypalButtonId} />

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Choose your subscription plan
            </label>
            <select
              name="os0"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
              <option value="Option 1">Option 1 US$10.00 - month(s)</option>
              <option value="Option 2">Option 2 US$15.00 - month(s)</option>
              <option value="Option 3">Option 3 US$20.00 - month(s)</option>
              <option value="Option 4">Option 4 US$25.00 - month(s)</option>
              <option value="Option 5">Option 5 US$30.00 - month(s)</option>
              <option value="Option 6">Option 6 US$35.00 - month(s)</option>
              <option value="Option 7">Option 7 US$40.00 - month(s)</option>
              <option value="Option 8">Option 8 US$45.00 - month(s)</option>
              <option value="Option 9">Option 9 US$50.00 - month(s)</option>
            </select>
          </div>

          <input type="hidden" name="currency_code" value="USD" />

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
            >
              Continue to PayPal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
