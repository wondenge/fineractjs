

import ApiClient from '../ApiClient';

/**
 * The GrantedAuthority model module.
 * @module model/GrantedAuthority
 * @version 1.0
 */
class GrantedAuthority {
    /**
     * Constructs a new <code>GrantedAuthority</code>.
     * @alias module:model/GrantedAuthority
     */
    constructor() { 
        
        GrantedAuthority.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GrantedAuthority</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GrantedAuthority} obj Optional instance to populate.
     * @return {module:model/GrantedAuthority} The populated <code>GrantedAuthority</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GrantedAuthority();

            if (data.hasOwnProperty('authority')) {
                obj['authority'] = ApiClient.convertToType(data['authority'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} authority
 */
GrantedAuthority.prototype['authority'] = undefined;






export default GrantedAuthority;

