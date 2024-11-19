import { Bell, MessageSquare, Settings } from "lucide-react";

export default function Topmenu() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="relative m-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border h-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-400 ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Pesquise aqui"
          />
        </div>

        <div className="flex items-center space-x-6">
          {/* Notificações e Configurações */}
          <div className="flex items-center space-x-4">
            {/* Ícone de Mensagem */}
            <div className="relative">
              <MessageSquare className="h-6 w-6 text-gray-400" />
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-purple-600 text-white text-xs rounded-sm">
                2
              </span>
            </div>

            {/* Ícone de Notificação */}
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-400" />
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-purple-600 text-white text-xs rounded-sm">
                2
              </span>
            </div>

            {/* Ícone de Configuração */}
            <Settings className="h-6 w-6 text-gray-400" />
          </div>

          {/* Avatar e Texto do Usuário */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div>
              <p className="text-sm font-medium text-gray-800">Zara Wardani</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
