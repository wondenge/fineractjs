

import ApiClient from '../ApiClient';

/**
 * The PostInterestRateChartsResponse model module.
 * @module model/PostInterestRateChartsResponse
 * @version 1.0
 */
class PostInterestRateChartsResponse {
    /**
     * Constructs a new <code>PostInterestRateChartsResponse</code>.
     * PostInterestRateChartsResponse
     * @alias module:model/PostInterestRateChartsResponse
     */
    constructor() { 
        
        PostInterestRateChartsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostInterestRateChartsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostInterestRateChartsResponse} obj Optional instance to populate.
     * @return {module:model/PostInterestRateChartsResponse} The populated <code>PostInterestRateChartsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostInterestRateChartsResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PostInterestRateChartsResponse.prototype['resourceId'] = undefined;






export default PostInterestRateChartsResponse;

