export class GridView {
	/**
	 * properties
	 * @param [array] _tableClass
	 * @param [array] data
	 * @param [array] attr
	 * @param [array] _element
	 * @param [array] _headling
	 * @param [array] _headlingClass
	 * @param [array] _items
	 */
	
	constructor() {
		this._tableClass = []
		this.data = []
		this.attr = []
		this._element = ''
		this._headling = ''
		this._headlingClass = []
		this.items = []
	}
	
	/**
	 * Method set headling
	 */
	
	setHeadling (value) {
		if (typeof value === 'string' && value.trim()) {
			this._headling = value
			return true
		}
		return false
	}
	
	setHeadlingClass (value) {
		if (typeof value === 'object') {
			this._headlingClass = value
			return true
		}
		return false
	}
	
	/**
	 * Method set element
	 */
	
	setElement (value) {
		if (document.querySelector(value)) {
			this._element = value
			return true
		}
		return false
	}
	
	/**
	 * Method for show GridViewTable
	 */
	
	render(data) {
		this.data = data
		this.setElement(this.data.element)
		this.setHeadling(this.data.headling)
		this.setHeadlingClass(this.data.headlingClass)
		this.attr = this.data.attr
		this.items = this.data["items"]
		const container = document.querySelector(this._element)
		if (this._headling) {
			const headling = document.createElement('h1')
			headling.textContent = this._headling
			this._headlingClass.forEach(cell => {
				headling.classList.add(cell)
			})
			container.append(headling)
		}
		
		// show table
		const table = document.createElement('table')
		this._tableClass.forEach(cell => {
			table.classList.add(cell)
		})
		
		//create table header
		const trHeadling = document.createElement('tr')
		for (const key in this.attr) {
			const th = document.createElement('th')
			if (this.attr[key].label) {
				th.textContent = this.attr[key].label
			} else {
				th.textContent = key
			}
			trHeadling.append(th)
		}
		table.append(trHeadling)
		
		//draw table
		for (const item of this.items) {
			const tr = document.createElement('tr')
			for (const key in this.attr) {
				const td = document.createElement('td')
				// if value === fn
				let value = item[key]
				if (this.attr[key].value) {
					value = this.attr[key].value(item[key])
				}
				if (this.attr[key].src) {
					td.innerHTML = value
				} else td.textContent = value
				tr.append(td)
			}
			table.append(tr)
		}
		container.append(table)
	}
}