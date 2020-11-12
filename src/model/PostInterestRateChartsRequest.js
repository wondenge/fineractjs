

import ApiClient from '../ApiClient';

/**
 * The PostInterestRateChartsRequest model module.
 * @module model/PostInterestRateChartsRequest
 * @version 1.0
 */
class PostInterestRateChartsRequest {
    /**
     * Constructs a new <code>PostInterestRateChartsRequest</code>.
     * PostInterestRateChartsRequest
     * @alias module:model/PostInterestRateChartsRequest
     */
    constructor() { 
        
        PostInterestRateChartsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostInterestRateChartsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostInterestRateChartsRequest} obj Optional instance to populate.
     * @return {module:model/PostInterestRateChartsRequest} The populated <code>PostInterestRateChartsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostInterestRateChartsRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('fromDate')) {
                obj['fromDate'] = ApiClient.convertToType(data['fromDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PostInterestRateChartsRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PostInterestRateChartsRequest.prototype['description'] = undefined;

/**
 * @member {String} type
 */
PostInterestRateChartsRequest.prototype['type'] = undefined;

/**
 * @member {String} locale
 */
PostInterestRateChartsRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostInterestRateChartsRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} fromDate
 */
PostInterestRateChartsRequest.prototype['fromDate'] = undefined;






export default PostInterestRateChartsRequest;

