

import ApiClient from '../ApiClient';
import PutFloatingRatesChanges from './PutFloatingRatesChanges';

/**
 * The PutFloatingRatesFloatingRateIdResponse model module.
 * @module model/PutFloatingRatesFloatingRateIdResponse
 * @version 1.0
 */
class PutFloatingRatesFloatingRateIdResponse {
    /**
     * Constructs a new <code>PutFloatingRatesFloatingRateIdResponse</code>.
     * PutFloatingRatesFloatingRateIdResponse
     * @alias module:model/PutFloatingRatesFloatingRateIdResponse
     */
    constructor() { 
        
        PutFloatingRatesFloatingRateIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutFloatingRatesFloatingRateIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutFloatingRatesFloatingRateIdResponse} obj Optional instance to populate.
     * @return {module:model/PutFloatingRatesFloatingRateIdResponse} The populated <code>PutFloatingRatesFloatingRateIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutFloatingRatesFloatingRateIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutFloatingRatesChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutFloatingRatesFloatingRateIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutFloatingRatesChanges} changes
 */
PutFloatingRatesFloatingRateIdResponse.prototype['changes'] = undefined;






export default PutFloatingRatesFloatingRateIdResponse;

