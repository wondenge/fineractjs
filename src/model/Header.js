

import ApiClient from '../ApiClient';

/**
 * The Header model module.
 * @module model/Header
 * @version 1.0
 */
class Header {
    /**
     * Constructs a new <code>Header</code>.
     * @alias module:model/Header
     */
    constructor() { 
        
        Header.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Header</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Header} obj Optional instance to populate.
     * @return {module:model/Header} The populated <code>Header</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Header();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
Header.prototype['name'] = undefined;

/**
 * @member {String} value
 */
Header.prototype['value'] = undefined;






export default Header;

