

import ApiClient from '../ApiClient';
import PostFloatingRatesRatePeriods from './PostFloatingRatesRatePeriods';

/**
 * The PostFloatingRatesRequest model module.
 * @module model/PostFloatingRatesRequest
 * @version 1.0
 */
class PostFloatingRatesRequest {
    /**
     * Constructs a new <code>PostFloatingRatesRequest</code>.
     * PostFloatingRatesRequest
     * @alias module:model/PostFloatingRatesRequest
     */
    constructor() { 
        
        PostFloatingRatesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostFloatingRatesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostFloatingRatesRequest} obj Optional instance to populate.
     * @return {module:model/PostFloatingRatesRequest} The populated <code>PostFloatingRatesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostFloatingRatesRequest();

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
PostFloatingRatesRequest.prototype['name'] = undefined;

/**
 * @member {Boolean} isBaseLendingRate
 */
PostFloatingRatesRequest.prototype['isBaseLendingRate'] = undefined;

/**
 * @member {Boolean} isActive
 */
PostFloatingRatesRequest.prototype['isActive'] = undefined;

/**
 * @member {Array.<module:model/PostFloatingRatesRatePeriods>} ratePeriods
 */
PostFloatingRatesRequest.prototype['ratePeriods'] = undefined;






export default PostFloatingRatesRequest;

