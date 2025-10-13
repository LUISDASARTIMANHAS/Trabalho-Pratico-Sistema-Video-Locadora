// src/service/dataStore.js
const bancos = ["atores", "classes", "diretores"]; // lista de bancos

// 🌟 Singleton para controlar os dados
const store = {
	_data: Object.fromEntries(bancos.map(b => [`${b}Array`, []])),

	/**
	 * Retorna todos os dados armazenados
	 * @returns {Object}
	 */
	getDataStore() {
		return this._data;
	},

	/**
	 * Retorna dados de um banco específico
	 * @param {string} banco
	 * @returns {Array}
	 */
	getBanco(banco) {
		const key = `${banco}Array`;
		return this._data[key] || [];
	},

	/**
	 * Atualiza os dados de um banco específico
	 * @param {string} banco
	 * @param {Array} dados
	 */
	setBanco(banco, dados) {
		const key = `${banco}Array`;
		this._data[key] = Array.isArray(dados) ? dados : [];
	},
};

/**
 * Inicializa todos os bancos e atualiza o store
 * @param {boolean} debug
 * @returns {Promise<void>}
 */
export async function initData(debug = false) {
	const fetchFunc = debug ? getDebug : get;
	const prefix = debug ? "DEBUG: " : "";

	for (const banco of bancos) {
		try {
			const dados = await fetchFunc(banco);
			store.setBanco(banco, dados);
			console.log(`[${prefix}DATASTORE] ${banco} carregado`, dados);
		} catch (err) {
			console.error(`[${prefix}ERRO] Falha ao carregar ${banco}:`, err);
			store.setBanco(banco, []); // fallback para array vazio
		}
	}

	console.log(`[${prefix}FINAL DATASTORE]`, store.getDataStore());
}

export default store;