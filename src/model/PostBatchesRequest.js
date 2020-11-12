

import ApiClient from '../ApiClient';
import Header from './Header';
import PostBodyRequestSwagger from './PostBodyRequestSwagger';

/**
 * The PostBatchesRequest model module.
 * @module model/PostBatchesRequest
 * @version 1.0
 */
class PostBatchesRequest {
    /**
     * Constructs a new <code>PostBatchesRequest</code>.
     * PostBatchesRequest
     * @alias module:model/PostBatchesRequest
     */
    constructor() { 
        
        PostBatchesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostBatchesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostBatchesRequest} obj Optional instance to populate.
     * @return {module:model/PostBatchesRequest} The populated <code>PostBatchesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostBatchesRequest();

            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'Number');
            }
            if (data.hasOwnProperty('relativeUrl')) {
                obj['relativeUrl'] = ApiClient.convertToType(data['relativeUrl'], 'String');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], [Header]);
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'Number');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = PostBodyRequestSwagger.constructFromObject(data['body']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} requestId
 */
PostBatchesRequest.prototype['requestId'] = undefined;

/**
 * @member {String} relativeUrl
 */
PostBatchesRequest.prototype['relativeUrl'] = undefined;

/**
 * @member {String} method
 */
PostBatchesRequest.prototype['method'] = undefined;

/**
 * @member {Array.<module:model/Header>} headers
 */
PostBatchesRequest.prototype['headers'] = undefined;

/**
 * @member {Number} reference
 */
PostBatchesRequest.prototype['reference'] = undefined;

/**
 * @member {module:model/PostBodyRequestSwagger} body
 */
PostBatchesRequest.prototype['body'] = undefined;






export default PostBatchesRequest;

