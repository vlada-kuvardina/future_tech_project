class BaseComponent {
    getProxyState(initialState) {
        return new Proxy(initialState, {
            get: (target, prop) => {
                return target[prop] 
            },
            set: (target, prop, value) => {
                target[prop] = value

                this.updateUI()

                return true
            },
        })
    } 
}

export default BaseComponent