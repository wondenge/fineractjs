

import ApiClient from '../ApiClient';

/**
 * The PutOfficesOfficeIdResponseChanges model module.
 * @module model/PutOfficesOfficeIdResponseChanges
 * @version 1.0
 */
class PutOfficesOfficeIdResponseChanges {
    /**
     * Constructs a new <code>PutOfficesOfficeIdResponseChanges</code>.
     * @alias module:model/PutOfficesOfficeIdResponseChanges
     */
    constructor() { 
        
        PutOfficesOfficeIdResponseChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutOfficesOfficeIdResponseChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutOfficesOfficeIdResponseChanges} obj Optional instance to populate.
     * @return {module:model/PutOfficesOfficeIdResponseChanges} The populated <code>PutOfficesOfficeIdResponseChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutOfficesOfficeIdResponseChanges();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutOfficesOfficeIdResponseChanges.prototype['name'] = undefined;






export default PutOfficesOfficeIdResponseChanges;

