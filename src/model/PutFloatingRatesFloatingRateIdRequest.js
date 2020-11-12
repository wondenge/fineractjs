

import ApiClient from '../ApiClient';
import PostFloatingRatesRatePeriods from './PostFloatingRatesRatePeriods';

/**
 * The PutFloatingRatesFloatingRateIdRequest model module.
 * @module model/PutFloatingRatesFloatingRateIdRequest
 * @version 1.0
 */
class PutFloatingRatesFloatingRateIdRequest {
    /**
     * Constructs a new <code>PutFloatingRatesFloatingRateIdRequest</code>.
     * PutFloatingRatesFloatingRateIdRequest
     * @alias module:model/PutFloatingRatesFloatingRateIdRequest
     */
    constructor() { 
        
        PutFloatingRatesFloatingRateIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutFloatingRatesFloatingRateIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutFloatingRatesFloatingRateIdRequest} obj Optional instance to populate.
     * @return {module:model/PutFloatingRatesFloatingRateIdRequest} The populated <code>PutFloatingRatesFloatingRateIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutFloatingRatesFloatingRateIdRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('isBaseLendingRate')) {
                obj['isBaseLendingRate'] = ApiClient.convertToType(data['isBaseLendingRate'], 'Boolean');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('ratePeriods')) {
                obj['ratePeriods'] = ApiClient.convertToType(data['ratePeriods'], [PostFloatingRatesRatePeriods]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutFloatingRatesFloatingRateIdRequest.prototype['name'] = undefined;

/**
 * @member {Boolean} isBaseLendingRate
 */
PutFloatingRatesFloatingRateIdRequest.prototype['isBaseLendingRate'] = undefined;

/**
 * @member {Boolean} isActive
 */
PutFloatingRatesFloatingRateIdRequest.prototype['isActive'] = undefined;

/**
 * @member {Array.<module:model/PostFloatingRatesRatePeriods>} ratePeriods
 */
PutFloatingRatesFloatingRateIdRequest.prototype['ratePeriods'] = undefined;






export default PutFloatingRatesFloatingRateIdRequest;

