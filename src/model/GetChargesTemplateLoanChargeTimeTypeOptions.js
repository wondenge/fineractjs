  

import ApiClient from '../ApiClient';

/**
 * The GetChargesTemplateLoanChargeTimeTypeOptions model module.
 * @module model/GetChargesTemplateLoanChargeTimeTypeOptions
 * @version 1.0
 */
class GetChargesTemplateLoanChargeTimeTypeOptions {
    /**
     * Constructs a new <code>GetChargesTemplateLoanChargeTimeTypeOptions</code>.
     * @alias module:model/GetChargesTemplateLoanChargeTimeTypeOptions
     */
    constructor() { 
        
        GetChargesTemplateLoanChargeTimeTypeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChargesTemplateLoanChargeTimeTypeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChargesTemplateLoanChargeTimeTypeOptions} obj Optional instance to populate.
     * @return {module:model/GetChargesTemplateLoanChargeTimeTypeOptions} The populated <code>GetChargesTemplateLoanChargeTimeTypeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChargesTemplateLoanChargeTimeTypeOptions();

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
GetChargesTemplateLoanChargeTimeTypeOptions.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetChargesTemplateLoanChargeTimeTypeOptions.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetChargesTemplateLoanChargeTimeTypeOptions.prototype['description'] = undefined;






export default GetChargesTemplateLoanChargeTimeTypeOptions;

