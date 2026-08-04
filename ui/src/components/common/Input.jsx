export default function Input({

                                  label,
                                  type = "text",
                                  placeholder,
                                  value,
                                  onChange

                              }) {

    return (

        <div className="space-y-2">

            <label className="text-sm font-semibold text-slate-700">

                {label}

            </label>

            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    px-4
                    py-3
                    outline-none
                    focus:border-emerald-500
                    focus:ring-2
                    focus:ring-emerald-200
                    transition
                "
            />

        </div>

    );

}