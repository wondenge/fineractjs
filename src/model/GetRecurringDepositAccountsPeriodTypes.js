

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositAccountsPeriodTypes model module.
 * @module model/GetRecurringDepositAccountsPeriodTypes
 * @version 1.0
 */
class GetRecurringDepositAccountsPeriodTypes {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsPeriodTypes</code>.
     * @alias module:model/GetRecurringDepositAccountsPeriodTypes
     */
    constructor() { 
        
        GetRecurringDepositAccountsPeriodTypes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsPeriodTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsPeriodTypes} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsPeriodTypes} The populated <code>GetRecurringDepositAccountsPeriodTypes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsPeriodTypes();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositAccountsPeriodTypes.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositAccountsPeriodTypes.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositAccountsPeriodTypes.prototype['description'] = undefined;






export default GetRecurringDepositAccountsPeriodTypes;

