

import ApiClient from '../ApiClient';

/**
 * The GetLoansProductsDaysInMonthType model module.
 * @module model/GetLoansProductsDaysInMonthType
 * @version 1.0
 */
class GetLoansProductsDaysInMonthType {
    /**
     * Constructs a new <code>GetLoansProductsDaysInMonthType</code>.
     * @alias module:model/GetLoansProductsDaysInMonthType
     */
    constructor() { 
        
        GetLoansProductsDaysInMonthType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansProductsDaysInMonthType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansProductsDaysInMonthType} obj Optional instance to populate.
     * @return {module:model/GetLoansProductsDaysInMonthType} The populated <code>GetLoansProductsDaysInMonthType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansProductsDaysInMonthType();

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
GetLoansProductsDaysInMonthType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoansProductsDaysInMonthType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoansProductsDaysInMonthType.prototype['description'] = undefined;






export default GetLoansProductsDaysInMonthType;

