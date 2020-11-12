

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositAccountsPeriodType model module.
 * @module model/GetFixedDepositAccountsPeriodType
 * @version 1.0
 */
class GetFixedDepositAccountsPeriodType {
    /**
     * Constructs a new <code>GetFixedDepositAccountsPeriodType</code>.
     * @alias module:model/GetFixedDepositAccountsPeriodType
     */
    constructor() { 
        
        GetFixedDepositAccountsPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsPeriodType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsPeriodType} The populated <code>GetFixedDepositAccountsPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsPeriodType();

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
GetFixedDepositAccountsPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositAccountsPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositAccountsPeriodType.prototype['description'] = undefined;






export default GetFixedDepositAccountsPeriodType;

