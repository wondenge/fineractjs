

import ApiClient from '../ApiClient';

/**
 * The GetInterestRateChartsTemplatePeriodTypes model module.
 * @module model/GetInterestRateChartsTemplatePeriodTypes
 * @version 1.0
 */
class GetInterestRateChartsTemplatePeriodTypes {
    /**
     * Constructs a new <code>GetInterestRateChartsTemplatePeriodTypes</code>.
     * @alias module:model/GetInterestRateChartsTemplatePeriodTypes
     */
    constructor() { 
        
        GetInterestRateChartsTemplatePeriodTypes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetInterestRateChartsTemplatePeriodTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetInterestRateChartsTemplatePeriodTypes} obj Optional instance to populate.
     * @return {module:model/GetInterestRateChartsTemplatePeriodTypes} The populated <code>GetInterestRateChartsTemplatePeriodTypes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetInterestRateChartsTemplatePeriodTypes();

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
GetInterestRateChartsTemplatePeriodTypes.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetInterestRateChartsTemplatePeriodTypes.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetInterestRateChartsTemplatePeriodTypes.prototype['description'] = undefined;






export default GetInterestRateChartsTemplatePeriodTypes;

