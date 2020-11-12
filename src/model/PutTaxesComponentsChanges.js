

import ApiClient from '../ApiClient';

/**
 * The PutTaxesComponentsChanges model module.
 * @module model/PutTaxesComponentsChanges
 * @version 1.0
 */
class PutTaxesComponentsChanges {
    /**
     * Constructs a new <code>PutTaxesComponentsChanges</code>.
     * @alias module:model/PutTaxesComponentsChanges
     */
    constructor() { 
        
        PutTaxesComponentsChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutTaxesComponentsChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutTaxesComponentsChanges} obj Optional instance to populate.
     * @return {module:model/PutTaxesComponentsChanges} The populated <code>PutTaxesComponentsChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTaxesComponentsChanges();

            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} percentage
 */
PutTaxesComponentsChanges.prototype['percentage'] = undefined;

/**
 * @member {String} name
 */
PutTaxesComponentsChanges.prototype['name'] = undefined;

/**
 * @member {Date} startDate
 */
PutTaxesComponentsChanges.prototype['startDate'] = undefined;






export default PutTaxesComponentsChanges;

