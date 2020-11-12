

import ApiClient from '../ApiClient';

/**
 * The PostRepostRequest model module.
 * @module model/PostRepostRequest
 * @version 1.0
 */
class PostRepostRequest {
    /**
     * Constructs a new <code>PostRepostRequest</code>.
     * PostRepostRequest
     * @alias module:model/PostRepostRequest
     */
    constructor() { 
        
        PostRepostRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRepostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRepostRequest} obj Optional instance to populate.
     * @return {module:model/PostRepostRequest} The populated <code>PostRepostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRepostRequest();

            if (data.hasOwnProperty('reportName')) {
                obj['reportName'] = ApiClient.convertToType(data['reportName'], 'String');
            }
            if (data.hasOwnProperty('reportType')) {
                obj['reportType'] = ApiClient.convertToType(data['reportType'], 'String');
            }
            if (data.hasOwnProperty('reportSubType')) {
                obj['reportSubType'] = ApiClient.convertToType(data['reportSubType'], 'String');
            }
            if (data.hasOwnProperty('reportCategory')) {
                obj['reportCategory'] = ApiClient.convertToType(data['reportCategory'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('reportSql')) {
                obj['reportSql'] = ApiClient.convertToType(data['reportSql'], 'String');
            }
            if (data.hasOwnProperty('reportParameters')) {
                obj['reportParameters'] = ApiClient.convertToType(data['reportParameters'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} reportName
 */
PostRepostRequest.prototype['reportName'] = undefined;

/**
 * @member {String} reportType
 */
PostRepostRequest.prototype['reportType'] = undefined;

/**
 * @member {String} reportSubType
 */
PostRepostRequest.prototype['reportSubType'] = undefined;

/**
 * @member {String} reportCategory
 */
PostRepostRequest.prototype['reportCategory'] = undefined;

/**
 * @member {String} description
 */
PostRepostRequest.prototype['description'] = undefined;

/**
 * @member {String} reportSql
 */
PostRepostRequest.prototype['reportSql'] = undefined;

/**
 * @member {Array.<Object>} reportParameters
 */
PostRepostRequest.prototype['reportParameters'] = undefined;






export default PostRepostRequest;

