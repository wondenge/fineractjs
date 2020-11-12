

import ApiClient from '../ApiClient';

/**
 * The PostAdhocQuerySearchResponse model module.
 * @module model/PostAdhocQuerySearchResponse
 * @version 1.0
 */
class PostAdhocQuerySearchResponse {
    /**
     * Constructs a new <code>PostAdhocQuerySearchResponse</code>.
     * PostAdhocQuerySearchResponse
     * @alias module:model/PostAdhocQuerySearchResponse
     */
    constructor() { 
        
        PostAdhocQuerySearchResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAdhocQuerySearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAdhocQuerySearchResponse} obj Optional instance to populate.
     * @return {module:model/PostAdhocQuerySearchResponse} The populated <code>PostAdhocQuerySearchResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAdhocQuerySearchResponse();

            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('loanProductName')) {
                obj['loanProductName'] = ApiClient.convertToType(data['loanProductName'], 'String');
            }
            if (data.hasOwnProperty('loanOutStanding')) {
                obj['loanOutStanding'] = ApiClient.convertToType(data['loanOutStanding'], 'Number');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} officeName
 */
PostAdhocQuerySearchResponse.prototype['officeName'] = undefined;

/**
 * @member {String} loanProductName
 */
PostAdhocQuerySearchResponse.prototype['loanProductName'] = undefined;

/**
 * @member {Number} loanOutStanding
 */
PostAdhocQuerySearchResponse.prototype['loanOutStanding'] = undefined;

/**
 * @member {Number} percentage
 */
PostAdhocQuerySearchResponse.prototype['percentage'] = undefined;






export default PostAdhocQuerySearchResponse;

