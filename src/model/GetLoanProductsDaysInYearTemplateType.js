

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsDaysInYearTemplateType model module.
 * @module model/GetLoanProductsDaysInYearTemplateType
 * @version 1.0
 */
class GetLoanProductsDaysInYearTemplateType {
    /**
     * Constructs a new <code>GetLoanProductsDaysInYearTemplateType</code>.
     * @alias module:model/GetLoanProductsDaysInYearTemplateType
     */
    constructor() { 
        
        GetLoanProductsDaysInYearTemplateType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsDaysInYearTemplateType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsDaysInYearTemplateType} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsDaysInYearTemplateType} The populated <code>GetLoanProductsDaysInYearTemplateType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsDaysInYearTemplateType();

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
GetLoanProductsDaysInYearTemplateType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsDaysInYearTemplateType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsDaysInYearTemplateType.prototype['description'] = undefined;






export default GetLoanProductsDaysInYearTemplateType;

