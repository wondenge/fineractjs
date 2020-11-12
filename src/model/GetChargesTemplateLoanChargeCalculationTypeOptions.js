

import ApiClient from '../ApiClient';

/**
 * The GetChargesTemplateLoanChargeCalculationTypeOptions model module.
 * @module model/GetChargesTemplateLoanChargeCalculationTypeOptions
 * @version 1.0
 */
class GetChargesTemplateLoanChargeCalculationTypeOptions {
    /**
     * Constructs a new <code>GetChargesTemplateLoanChargeCalculationTypeOptions</code>.
     * @alias module:model/GetChargesTemplateLoanChargeCalculationTypeOptions
     */
    constructor() { 
        
        GetChargesTemplateLoanChargeCalculationTypeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChargesTemplateLoanChargeCalculationTypeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChargesTemplateLoanChargeCalculationTypeOptions} obj Optional instance to populate.
     * @return {module:model/GetChargesTemplateLoanChargeCalculationTypeOptions} The populated <code>GetChargesTemplateLoanChargeCalculationTypeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChargesTemplateLoanChargeCalculationTypeOptions();

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
GetChargesTemplateLoanChargeCalculationTypeOptions.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetChargesTemplateLoanChargeCalculationTypeOptions.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetChargesTemplateLoanChargeCalculationTypeOptions.prototype['description'] = undefined;






export default GetChargesTemplateLoanChargeCalculationTypeOptions;

