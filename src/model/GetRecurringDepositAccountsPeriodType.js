

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositAccountsPeriodType model module.
 * @module model/GetRecurringDepositAccountsPeriodType
 * @version 1.0
 */
class GetRecurringDepositAccountsPeriodType {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsPeriodType</code>.
     * @alias module:model/GetRecurringDepositAccountsPeriodType
     */
    constructor() { 
        
        GetRecurringDepositAccountsPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsPeriodType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsPeriodType} The populated <code>GetRecurringDepositAccountsPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsPeriodType();

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
GetRecurringDepositAccountsPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositAccountsPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositAccountsPeriodType.prototype['description'] = undefined;






export default GetRecurringDepositAccountsPeriodType;

