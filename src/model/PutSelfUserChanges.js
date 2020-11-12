

import ApiClient from '../ApiClient';

/**
 * The PutSelfUserChanges model module.
 * @module model/PutSelfUserChanges
 * @version 1.0
 */
class PutSelfUserChanges {
    /**
     * Constructs a new <code>PutSelfUserChanges</code>.
     * @alias module:model/PutSelfUserChanges
     */
    constructor() { 
        
        PutSelfUserChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSelfUserChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSelfUserChanges} obj Optional instance to populate.
     * @return {module:model/PutSelfUserChanges} The populated <code>PutSelfUserChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSelfUserChanges();

            if (data.hasOwnProperty('passwordEncoded')) {
                obj['passwordEncoded'] = ApiClient.convertToType(data['passwordEncoded'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} passwordEncoded
 */
PutSelfUserChanges.prototype['passwordEncoded'] = undefined;






export default PutSelfUserChanges;

