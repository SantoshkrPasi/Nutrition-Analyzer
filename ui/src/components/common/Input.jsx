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

rounded-2xl

bg-white/70

border
border-slate-200

px-4
py-3.5

transition-all
duration-300

placeholder:text-slate-400

focus:border-emerald-500
focus:ring-4
focus:ring-emerald-100
focus:bg-white

outline-none
"
            />

        </div>

    );

}