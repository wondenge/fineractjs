

import ApiClient from '../ApiClient';

/**
 * The GetRecurringPaymentType model module.
 * @module model/GetRecurringPaymentType
 * @version 1.0
 */
class GetRecurringPaymentType {
    /**
     * Constructs a new <code>GetRecurringPaymentType</code>.
     * @alias module:model/GetRecurringPaymentType
     */
    constructor() { 
        
        GetRecurringPaymentType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringPaymentType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringPaymentType} obj Optional instance to populate.
     * @return {module:model/GetRecurringPaymentType} The populated <code>GetRecurringPaymentType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringPaymentType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringPaymentType.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetRecurringPaymentType.prototype['name'] = undefined;






export default GetRecurringPaymentType;

