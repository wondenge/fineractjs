

import ApiClient from '../ApiClient';
import GetInterestRateChartsTemplatePeriodTypes from './GetInterestRateChartsTemplatePeriodTypes';

/**
 * The GetInterestRateChartsTemplateResponse model module.
 * @module model/GetInterestRateChartsTemplateResponse
 * @version 1.0
 */
class GetInterestRateChartsTemplateResponse {
    /**
     * Constructs a new <code>GetInterestRateChartsTemplateResponse</code>.
     * GetInterestRateChartsTemplateResponse
     * @alias module:model/GetInterestRateChartsTemplateResponse
     */
    constructor() { 
        
        GetInterestRateChartsTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetInterestRateChartsTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetInterestRateChartsTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetInterestRateChartsTemplateResponse} The populated <code>GetInterestRateChartsTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetInterestRateChartsTemplateResponse();

            if (data.hasOwnProperty('periodTypes')) {
                obj['periodTypes'] = ApiClient.convertToType(data['periodTypes'], [GetInterestRateChartsTemplatePeriodTypes]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetInterestRateChartsTemplatePeriodTypes>} periodTypes
 */
GetInterestRateChartsTemplateResponse.prototype['periodTypes'] = undefined;






export default GetInterestRateChartsTemplateResponse;

