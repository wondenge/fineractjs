

import ApiClient from '../ApiClient';

/**
 * The GetLoansProductsDaysInYearType model module.
 * @module model/GetLoansProductsDaysInYearType
 * @version 1.0
 */
class GetLoansProductsDaysInYearType {
    /**
     * Constructs a new <code>GetLoansProductsDaysInYearType</code>.
     * @alias module:model/GetLoansProductsDaysInYearType
     */
    constructor() { 
        
        GetLoansProductsDaysInYearType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansProductsDaysInYearType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansProductsDaysInYearType} obj Optional instance to populate.
     * @return {module:model/GetLoansProductsDaysInYearType} The populated <code>GetLoansProductsDaysInYearType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansProductsDaysInYearType();

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
GetLoansProductsDaysInYearType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoansProductsDaysInYearType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoansProductsDaysInYearType.prototype['description'] = undefined;






export default GetLoansProductsDaysInYearType;

